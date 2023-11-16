using Microsoft.AspNetCore.Mvc;
using UserCommunication.Database;

namespace UserCommunication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : Controller
    {
        private readonly MyDbContext _context;
        public UserController(MyDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        [Route("AddUser")]
        public IActionResult AddUser([FromBody] User newUser)
        {
            if (_context.Users.Any(u => u.FirstName == newUser.FirstName && u.LastName == newUser.LastName))
            {
                return BadRequest("Użytkownik o podanych danych już istnieje.");
            }
            _context.Users.Add(newUser);
            _context.SaveChanges();

            return Ok(newUser);
        }

        public IActionResult Index()
        {
            return View();
        }
    }
}
