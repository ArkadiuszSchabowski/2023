using Connect.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using Connect.Database;

namespace Connect.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            using (var context = new MyDbContext())
            {
                var animal = new Animal()
                {
                    Name = "Tiger",
                    Predator = true,
                };
                var animal2 = new Animal()
                {
                    Name = "Lion",
                    Predator = true,
                };
                context.Animals.Add(animal);
                context.Animals.Add(animal2);
                context.SaveChanges();
                var allAnimals = context.Animals.ToList();
                return View(allAnimals);
            };
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}