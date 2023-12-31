﻿using Microsoft.AspNetCore.Mvc;
using WordMaster.Database.Entities;
using WordMaster.Services;

namespace WordMaster.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WordController : ControllerBase
    {
        private readonly IWordService _service;
        private const string notFoundMessage = "Nie znaleziono słowa o podanym Id!";
        public WordController(IWordService service)
        {
            _service = service;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Word>> GetAllWords()
        {
            var allWords = _service.GetAllWords();

            if(allWords == null)
            {
                return NotFound(new {message = "Nie masz jeszcze słów w słowniku!", data = allWords });
            }

            return Ok(new { status = "ok", message = "Słownik wczytany pomyślnie!", data = allWords });
        }

        [HttpGet("{id}")]
        public ActionResult<Word> GetWord(int id)
        {
            var word = _service.GetWord(id);
            if (word == null)
            {
                return NotFound(new { status = "error", action = "getOne", message = notFoundMessage, data = word });
            }
            return Ok(new {message="Słowo odszukane pomyślnie!", data = word});
        }


        [HttpDelete("{id}")]
        public ActionResult RemoveWord([FromRoute] int id)
        {
            bool isRemoved = _service.Delete(id);

            if (!isRemoved)
            {
                return NotFound(new { status = "error", message = notFoundMessage });
            }
            return Ok(new { status = "success", action = "remove", message = $"Słowo o Id: {id} zostało usunięte pomyślnie!" });
        }

        [HttpPost]
        public ActionResult AddNewWord([FromBody] Word word)
        {
            int result = _service.Create(word);

            if (result == 0)
            {
                var polishConflict = new { status = "conflict", conflictType = "conflictPl", message = "Konflikt z polskim odpowiednikiem!" };
                return Conflict(polishConflict);
            }
            if (result == 1)
            {
                var englishConflict = new { status = "conflict", ConflictType = "conflictEng", message = "Konflikt z angielskim odpowiednikiem!" };
                return Conflict(englishConflict);
            }

            return Ok(new { status = "success", action="add",message = "Słowo dodane pomyślnie!"});
        }
        [HttpPut("{id}")]
        public ActionResult<int> UpdateWord([FromRoute] int id, [FromBody] Word word)
        {
            var result = _service.Update(id, word);

            switch (result)
            {
                case 0:
                    return NotFound(new {status="error", message= notFoundMessage });

                case 1:
                    return Conflict(new { status = "conflict", conflictType="duplicate",message = "Takie połączenie słów występuje już w bazie danych!" });

                case 2:
                    return Ok(new { status = "success", action = "update",message = "Słowo zaaktualizowane pomyślnie!" });
            }
            return NotFound();
        }
    }
}