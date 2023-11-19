using EnglishFlashCards_MVC.Database;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EnglishFlashCards_MVC.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApiController : ControllerBase
    {
        private readonly MyDbContext _context;
        public ApiController(MyDbContext context)
        {
            _context = context;
        }
        [HttpPost("AddWord")]
        public IActionResult AddWord([FromBody] Word newWord)
        {
            if (newWord == null)
            {
                return BadRequest("Invalid data");
            }
            _context.Words.Add(newWord);
            _context.SaveChanges();

            // Tu dodaj logikę do obsługi nowego użytkownika (dodaj do bazy danych, itp.)

            return Ok("Word added successfully"); // Odpowiedź OK
        }
        [HttpGet("GetWords")]
        public IActionResult GetWords()
        {
            var wordsList = _context.Words.ToList();
            return Ok(wordsList);
        }
    }
}
