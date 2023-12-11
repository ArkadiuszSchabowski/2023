using DatabaseRelation.Database;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DatabaseRelation.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly MyDbContext _context;
        public UserController(MyDbContext context)
        {
            _context = context;
        }
        [HttpGet("users")]
        public ActionResult<IEnumerable<object>> GetUsers()
        {
            var allUsers = _context.Users.ToList();
            if(allUsers == null)
            {
                return NotFound();
            }
            return Ok(allUsers);
        }
    }
}
