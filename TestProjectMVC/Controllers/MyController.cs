using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace TestProjectMVC.Controllers
{
    public class MyController : Controller
    {
        public IActionResult Index()
        {
            int[] numbers = new int[] { 1, 2, 3, 4, 5 };

            // Serializuj dane jako JSON
            string jsonData = JsonSerializer.Serialize(numbers);

            // Zwróć dane jako treść HTTP
            return Content(jsonData, "application/json");
        }
    }
}
