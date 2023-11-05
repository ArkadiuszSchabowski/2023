using ExamMVCDatabase.Database;
using ExamMVCDatabase.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace ExamMVCDatabase.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly MyDbContext _context;
        public IActionResult Index()
        {
            // Tworzenie i konfiguracja MyDbContext
            using (var context = new MyDbContext())
            {
                var dataFromDatabase = context.Animals.ToList(); // Pobranie danych z bazy
                return View(dataFromDatabase);
            }
        }
        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
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