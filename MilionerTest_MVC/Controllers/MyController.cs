using Microsoft.AspNetCore.Mvc;
using MilionerTest_MVC.Models;
using Newtonsoft.Json;
using System.Collections.Generic; // Dodano using dla List

namespace MilionerTest_MVC.Controllers
{
    [Route("My")] // Dodaj atrybut routingu dla kontrolera
    public class MyController : Controller // Dodano ": Controller" aby dziedziczyć z kontrolera
    {
        [HttpGet("GetData")] // Dodaj atrybut routingu dla akcji
        public ActionResult GetData()
        {
            var questionData = new List<MainProperty>()
            {
                new MainProperty("Co pije kot?", new string[] { "A-Woda", "B-Piwo", "C-Mleko", "D-Sok" }, 2),
                new MainProperty("Co goni pies?", new string[] { "A-Koty", "B-Lwy", "C-Slonie", "D-Antylopy" }, 2)
            };

            string json = JsonConvert.SerializeObject(questionData);

            return Content(json, "application/json");
        }
    }
}