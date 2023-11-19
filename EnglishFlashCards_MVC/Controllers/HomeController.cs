using EnglishFlashCards_MVC.Database;
using EnglishFlashCards_MVC.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace EnglishFlashCards_MVC.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly WordAdder _wordAdder;

        public HomeController(ILogger<HomeController> logger, WordAdder wordAdder)
        {
            _logger = logger;
            _wordAdder = wordAdder;
        }

        public IActionResult Index()
        {
            return View();
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
