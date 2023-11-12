using DI2.Database;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace DI2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class APIController : ControllerBase
    {
        private readonly MyDbContext _db;

        public APIController(MyDbContext db)
        {
            _db = db;
        }

        [HttpGet]
        public IActionResult GetAllAnimals()
        {
            var allAnimals = _db.Animals.ToList();
            return Ok(allAnimals);
        }
    }
}
