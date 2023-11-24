using ArkadiuszSchabowski.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace ArkadiuszSchabowski.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApiController : ControllerBase
    {
        private readonly UserRepository user = new UserRepository();
        [HttpGet("GetUsers")]
        public ActionResult<List<User>> GetUsers()
        {
            var users = user.GetUsers();
            return Ok(users);
        }
    }
}
