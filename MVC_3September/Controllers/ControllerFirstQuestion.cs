using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using MVC_3September.Models;
using System.Collections;
using System.Security.Cryptography.Xml;

namespace MVC_3September.Controllers
{
    public class FirstQuestionsController : Controller
    {
        private readonly List<FirstQuestions> _questions = new List<FirstQuestions>
        {
    new FirstQuestions("Jak wyglada operator inkrementacji?", new string[] { "==", "++", "--", "=" }, 1),
    new FirstQuestions("Jak wyglada operator dekrementacji?", new string[] { "==", "--", "++", "=" }, 1),
    new FirstQuestions("Jak wyglada operator przypisania?", new string[] { "==", "=", "--", "++" }, 1),

    new SecondQuestions("Co pije kot?", new string[] { "Wode", "Mleko", "Piwo", "Sok" }, 0),
    new SecondQuestions("Pytanie 5?", new string[] { "Odpowiedź A", "Odpowiedź B", "Odpowiedź C", "Odpowiedź D" }, 0),
    new SecondQuestions("Pytanie 6?", new string[] { "Odpowiedź A", "Odpowiedź B", "Odpowiedź C", "Odpowiedź D" }, 0),

    new ThirdQuestions("Pytanie 7?", new string[] { "Odpowiedź A", "Odpowiedź B", "Odpowiedź C", "Odpowiedź D" }, 1),
    new ThirdQuestions("Pytanie 8?", new string[] { "Odpowiedź A", "Odpowiedź B", "Odpowiedź C", "Odpowiedź D" }, 0),
    new ThirdQuestions("Pytanie 9?", new string[] { "Odpowiedź A", "Odpowiedź B", "Odpowiedź C", "Odpowiedź D" }, 2),

    new FourthQuestions("Pytanie 10?", new string[] { "Odpowiedź A", "Odpowiedź B", "Odpowiedź C", "Odpowiedź D" }, 3),
    new FourthQuestions("Pytanie 11?", new string[] { "Odpowiedź A", "Odpowiedź B", "Odpowiedź C", "Odpowiedź D" }, 1),
    new FourthQuestions("Pytanie 12?", new string[] { "Odpowiedź A", "Odpowiedź B", "Odpowiedź C", "Odpowiedź D" }, 2),

    new FifthQuestions("Pytanie 13?", new string[] { "Odpowiedź A", "Odpowiedź B", "Odpowiedź C", "Odpowiedź D" }, 0),
    new FifthQuestions("Pytanie 14?", new string[] { "Odpowiedź A", "Odpowiedź B", "Odpowiedź C", "Odpowiedź D" }, 3),
    new FifthQuestions("Pytanie 15?", new string[] { "Odpowiedź A", "Odpowiedź B", "Odpowiedź C", "Odpowiedź D" }, 2)
        };

        // To będzie działać jako domyślna akcja
        public IActionResult Index()
        {
            return View(_questions);
        }

        public IActionResult GetQuestions()
        {
            return Json(_questions); // Zwraca dane JSON
        }
    }
}
