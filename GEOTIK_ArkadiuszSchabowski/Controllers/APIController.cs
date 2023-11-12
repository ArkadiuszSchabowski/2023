using GEOTIK_ArkadiuszSchabowski.Database;
using GEOTIK_ArkadiuszSchabowski.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Cryptography;

namespace GEOTIK_ArkadiuszSchabowski.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class APIController : ControllerBase
    {
        private readonly MyDbContext _context;
        private readonly IUserService _userService;
        public APIController(MyDbContext context, IUserService userService)
        {
            _context = context;
            _userService = userService;
        }
        [HttpGet]
        public List<User> GetUsers()
        {
            var userList = _context.Users.ToList();
            return userList;
        }

        [HttpGet("{id}")]
        public IActionResult GetUser(int id)
        {
            var user = _userService.GetUser(id);

            if (user == null)
            {
                return NotFound();
            }

            return Ok(user);
        }
        [HttpPost]
        public IActionResult AddUser([FromBody] User newUser)
        {
            if (newUser == null || string.IsNullOrEmpty(newUser.Email) || string.IsNullOrEmpty(newUser.Password))
            {
                return BadRequest("Invalid data");
            }

            _context.Users.Add(newUser);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetUser), new { id = newUser.Id }, newUser);
        }


        [HttpPost("resetPassword")]
        public IActionResult ResetPassword([FromBody] ResetPasswordDto resetPasswordDto)
        {
            var user = _context.Users.FirstOrDefault(u => u.Email == resetPasswordDto.Email);

            if (user == null)
            {
                return BadRequest("User not found"); // Bad Request (400) jeśli użytkownik nie istnieje
            }
            return Accepted(); // 202 Accepted w przypadku powodzenia
        }
        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginDto loginDto)
        {
            if (loginDto == null || string.IsNullOrEmpty(loginDto.Email) || string.IsNullOrEmpty(loginDto.Password))
            {
                return BadRequest("Invalid data"); // Bad Request (400) w przypadku niepoprawnych danych
            }

            var user = _context.Users.FirstOrDefault(u => u.Email == loginDto.Email && u.Password == loginDto.Password);

            if (user != null)
            {

                return Ok("Login successful");
            }

            return Unauthorized("Invalid email or password"); // 401 Unauthorized w przypadku niepoprawnych danych logowania
        }

    }
}
