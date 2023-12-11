using LunchingProject.Database.Entities;

namespace LunchingProject.Database
{
    public class RestaurantSeeder
    {
        private readonly MyDbContext _context;
        public RestaurantSeeder(MyDbContext context)
        {
            _context = context;
        }
        public void Seed()
        {
            if(!_context.Restaurants.Any())
            {
                var restaurants = GetRestaurants();
                _context.Restaurants.AddRange(restaurants);
                _context.SaveChanges();
            }
        }

        private IEnumerable<Restaurant> GetRestaurants()
        {
            var restaurants = new List<Restaurant>()
            {
                new Restaurant
                {
                    Name = "Malinowy Dwór",
                    Description = "Przepyszne jedzenie dla koneserów"
                },
                new Restaurant
                {
                    Name = "Bourbon Katowice",
                    Description = "Smaczne i tanio"
                },
                new Restaurant
                {

                    Name = "Pizzeria u Batmana",
                    Description = "Pyszna pizza i szybki dowóz"
                }
            };
            return restaurants;
        }
    }
}
