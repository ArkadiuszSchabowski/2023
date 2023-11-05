using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;
using OctoberTest.DataBase;
using OctoberTest.Models;
using System.Diagnostics;

namespace OctoberTest.Controllers
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
                    Name = "Lion",
                };
                var secondAnimal = new Animal()
                {
                    Name = "Guinea Pig",
                };

                context.Animals.Add(animal);
                context.Animals.Add(secondAnimal);
                context.SaveChanges();

                var allAnimals = context.Animals.ToList();
                return View(allAnimals);
            }
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