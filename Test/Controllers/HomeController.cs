using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using Test.Database;
using Test.Database.Entities;
using Test.Models;

namespace Test.Controllers
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
            using var context = new MyDbContext();
            var animal = new GuineaPig()
            {
                Id = 0,
                Name = "Tola",
                Sex = "Female",
                Predator = false,
                Tail = false,
                Color = "White"
            };

            context.GuineaPigs.Add(animal);


            var allAnimals = context.GuineaPigs.ToList();
            context.SaveChanges();

            return View(allAnimals);
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