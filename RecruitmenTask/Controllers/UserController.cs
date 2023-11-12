using Microsoft.AspNetCore.Mvc;
using RecruitmenTask.Database;

namespace UserApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private List<User> userList = new List<User>
        {
            new User { Id = 1, EMail = "user1@example.com", Password = "password1" },
            new User { Id = 2, EMail = "user2@example.com", Password = "password2" },
            new User { Id = 3, EMail = "user3@example.com", Password = "password3" }
        };

        [HttpGet("users")]
        public ActionResult<IEnumerable<User>> GetUsers()
        {
            return userList;
        }

        [HttpGet("users/{id}")]
        public ActionResult<User> GetUser(int id)
        {
            var user = userList.FirstOrDefault(u => u.Id == id);
            if (user == null)
            {
                return NotFound();
            }
            return user;
        }

        [HttpPost("users")]
        public IActionResult AddUser([FromBody] User user)
        {
            if (user == null)
            {
                return BadRequest();
            }
            user.Id = userList.Max(u => u.Id) + 1; // Przydziel nowe Id
            userList.Add(user);
            return CreatedAtAction("GetUser", new { id = user.Id }, user);
        }

        [HttpPost("users/resetPassword")]
        public IActionResult ResetPassword([FromBody] string email)
        {
            var user = userList.FirstOrDefault(u => u.EMail == email);
            if (user != null)
            {
                user.Password = "new_password"; // Zresetuj hasło
                return Accepted();
            }
            return BadRequest();
        }

        [HttpPost("auth/login")]
        public IActionResult Login([FromBody] User loginUser)
        {
            var user = userList.FirstOrDefault(u => u.EMail == loginUser.EMail && u.Password == loginUser.Password);
            if (user != null)
            {
                return Ok();
            }
            return Unauthorized();
        }
    }
}
