using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WordMaster.Database;
using WordMaster.Database.Entities;
using WordMaster.Services;

namespace WordMaster.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WordController : ControllerBase
    {
        private readonly IWordService _service;
        public WordController(IWordService service)
        {
            _service = service;
        }

        [HttpGet("words")]
        public ActionResult<IEnumerable<Word>> GetAllWords()
        {
            var allWords = _service.GetAllWords();

            return Ok(allWords);
        }

        [HttpGet("words/{id}")]
        public ActionResult<Word> GetWord(int id)
        {
            var word = _service.GetWord(id);
            if(word == null)
            {
                return NotFound("Nie znaleziono słowa o podanym Id");
            }

            return Ok(word);
        }

        [HttpPost("addWord")]
        public ActionResult AddNewWord([FromBody] Word word)
        {
            bool isConflict = _service.Create(word);

            if (isConflict)
            {
                return Conflict(new { message = "Słowo już istnieje w bazie danych" });
            }

            return Ok(new { message = "Słowo dodane pomyślnie" });
        }

        [HttpDelete("removeWord/{id}")]
        public ActionResult RemoveWord([FromRoute] int id)
        {
            bool isRemoved = _service.Delete(id);

            if (!isRemoved)
            {
                return NotFound();
            }
            return Ok();
        }
        [HttpPut("updateWord/{id}")]
        public ActionResult<Word> UpdateWord([FromRoute] int id, [FromBody] Word word)
        {
            var result = _service.Update(id, word);

            if (!result)
            {
                return NotFound("Słowo o podanym Id nie zostało znalezione.");
            }
            return Ok();
        }
    }
}