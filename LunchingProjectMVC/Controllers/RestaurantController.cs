using LunchingProjectMVC.Database;
using LunchingProjectMVC.Database.Entities;
using Microsoft.AspNetCore.Mvc;

namespace LunchingProjectMVC.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RestaurantController : ControllerBase
    {
        private readonly MyDbContext _context;
        public RestaurantController(MyDbContext context)
        {
            _context = context;
        }
        [HttpGet("restaurants")]
        public ActionResult<IEnumerable<object>> GetAllRestaurants()
        {
            var allRestaurants = _context.Restaurants.ToList();
            return Ok(allRestaurants);
        }
        [HttpGet("restaurants/{id}")]
        public IActionResult GetRestaurant([FromRoute] int id)
        {
            var currentRestaurant = _context.Restaurants.FirstOrDefault(_x => _x.Id == id);

            if (currentRestaurant == null)
            {
                return NotFound();
            }

            return Ok(currentRestaurant);
        }

        [HttpPost("restaurants")]
        public ActionResult AddRestaurant([FromBody] Restaurant restaurant)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var newRestaurant = new Restaurant()
            {
                Name = restaurant.Name,
                OpenHour = restaurant.OpenHour,
                CloseHour = restaurant.CloseHour,
                HasDelivery = restaurant.HasDelivery,
                Description = restaurant.Description
            };
            _context.Restaurants.Add(newRestaurant);
            _context.SaveChanges();
            return Ok();
        }
        [HttpDelete("restaurants/{id}")]
        public ActionResult RemoveRestaurant([FromRoute] int id)
        {
            var currentRestaurant = _context.Restaurants.FirstOrDefault(_x => _x.Id == id);

            if (currentRestaurant == null) return NotFound();

            _context.Restaurants.Remove(currentRestaurant);
            _context.SaveChanges();
            return Ok();
        }
        [HttpPatch("restaurants/{id}/description")]
        public ActionResult ChangeDescription([FromBody] string description, [FromRoute] int id)
        {
            var currentRestaurant = _context.Restaurants.FirstOrDefault(_context => _context.Id == id);

            if (currentRestaurant == null) return NotFound();

            currentRestaurant.Description = description;
            _context.SaveChanges();

            return Ok();
        }

        [HttpPut("restaurants/{id}")]
        public ActionResult UpdateRestaurant([FromBody] Restaurant restaurant, [FromRoute] int id)
        {
            var currentRestaurant = _context.Restaurants.FirstOrDefault(x => x.Id == id);

            if (currentRestaurant == null) return NotFound();

            currentRestaurant.Name = restaurant.Name;
            currentRestaurant.OpenHour = restaurant.OpenHour;
            currentRestaurant.CloseHour = restaurant.CloseHour;
            currentRestaurant.HasDelivery = restaurant.HasDelivery;
            currentRestaurant.Description = restaurant.Description;

            _context.SaveChanges();

            return Ok();
        }
    }
}
