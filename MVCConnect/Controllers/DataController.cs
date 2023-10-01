using System.Globalization;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Mvc;
using MVCConnect.Models;

namespace MVCConnect.Controllers
{
    public class DataController : Controller
    {
        public ActionResult GetData()
        {
            var questionsData = new List<QuestionData>
        {
            new QuestionData
            {
                Text = "Co pije kot?",
                Answers = new string[] { "A-Woda", "B-Mleko" },
                CorrectAnswerIndex = 1
            },
            new QuestionData
            {
                Text = "Co je pies?",
                Answers = new string[] { "A-Kość", "B-Chleb" },
                CorrectAnswerIndex = 0
            }
        };

            string json = JsonConvert.SerializeObject(questionsData);

            return Content(json, "application/json");
        }
    }

}
