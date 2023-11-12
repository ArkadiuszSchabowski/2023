using HangmanGameMVC.Database;
using HangmanGameMVC.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using Newtonsoft.Json;

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
                var answerIsInTheDatabase = context.Databases.FirstOrDefault(x => x.Answer == "Tola");
                var answerIsInTheDatabase2 = context.Databases.FirstOrDefault(x => x.Answer == "Kropka");
                var answerIsInTheDatabase3 = context.Databases.FirstOrDefault(x => x.Answer == "Kreska");

                if (answerIsInTheDatabase == null)
                {
                    var firstQuestion = new HangmanDatabase()
                    {
                        Length = 6,
                        DifficultyLevel = "Łatwy",
                        Hint = "Długowłosy samiec",
                        Answer = "Kropka",

                    };
                    context.Databases.Add(firstQuestion);
                }
                if(answerIsInTheDatabase2 == null)
                {
                var secondQuestion = new HangmanDatabase()
                {
                    Length = 6,
                    DifficultyLevel = "Łatwy",
                    Hint = "Krótkowłosy samiec",
                    Answer = "Kreska",
                };
                    context.Databases.Add(secondQuestion);
                }
                if(answerIsInTheDatabase3 == null)
                {
                var thirdQuestion = new HangmanDatabase()
                {
                    Length = 4,
                    DifficultyLevel = "Łatwy",
                    Hint = "Długowłosa samica",
                    Answer = "Tola",
                };
                context.Databases.Add(thirdQuestion);
                }

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