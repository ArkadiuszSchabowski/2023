using LunchingProject.Database;
using LunchingProject.Database.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LunchingProject.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ApiController : ControllerBase
    {
        private readonly MyDbContext _context;
        public ApiController(MyDbContext context)
        {
            _context = context;
        }
        [HttpGet("restaurants")]
        public IEnumerable<Restaurant> GetRestaurants()
        {
            return _context.Restaurants.ToList();
        }
        [HttpGet("restaurants/{id}")]
        public IActionResult GetRestaurant([FromRoute] int id)
        {
            var restaurant = _context.Restaurants.FirstOrDefault(r => r.Id == id);

            if (restaurant == null)
            {
                return NotFound();
            }

            return Ok(restaurant); // 200 OK
        }
        [HttpPost("restaurants/addRestaurant")]
        public IActionResult AddRestaurant([FromBody] Restaurant restaurant)
        {
            var newRestaurant = new Restaurant
            {
                Name = restaurant.Name,
                Description = restaurant.Description
            };
            _context.Restaurants.Add(newRestaurant);
            _context.SaveChanges();

            return Ok(newRestaurant);
        }
        [HttpDelete("restaurants/removeRestaurant")]
        public IActionResult RemoveRestaurant([FromBody] Restaurant name)
        {
            var currentRestaurant = _context.Restaurants.FirstOrDefault(x => x.Name.Equals(name.Name));

            if (currentRestaurant == null)
            {
                return NotFound("Restaurant not found");
            }

            _context.Restaurants.Remove(currentRestaurant);
            _context.SaveChanges();

            return Ok();
        }
        [HttpPatch("restaurants/updateDescription/{id}")]
        public IActionResult PatchRestaurantDescription([FromRoute] int id, [FromBody] string newDescription)
        {
            var currentRestaurant = _context.Restaurants.FirstOrDefault(x => x.Id == id);

            if (currentRestaurant == null)
            {
                return NotFound("Restaurant not found");
            }

            currentRestaurant.Description = newDescription;

            _context.SaveChanges();

            return Ok("Success");
        }
    }
}
