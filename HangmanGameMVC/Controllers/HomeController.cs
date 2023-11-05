using HangmanGameMVC.Database;
using HangmanGameMVC.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace HangmanGameMVC.Controllers
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
                var firstQuestion = new HangmanDatabase()
                {
                    Length = 6,
                    DifficultyLevel = "Łatwy",
                    Hint = "Długowłosy samiec",
                    Answer = "Kropka",

                };
                var secondQuestion = new HangmanDatabase()
                {
                    Length = 6,
                    DifficultyLevel = "Łatwy",
                    Hint = "Krótkowłosy samiec",
                    Answer = "Kreska",
                };
                var thirdQuestion = new HangmanDatabase()
                {
                    Length = 4,
                    DifficultyLevel = "Łatwy",
                    Hint = "Długowłosa samica",
                    Answer = "Tola",
                };

                context.Databases.Add(firstQuestion);
                context.Databases.Add(secondQuestion);
                context.Databases.Add(thirdQuestion);
                context.SaveChanges();
                var newListQuestions = context.Databases.ToList();

                return View(newListQuestions);
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