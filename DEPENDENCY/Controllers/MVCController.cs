using DEPENDENCY.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace DEPENDENCY.Controllers
{
    public class MVCController : Controller
    {
        private readonly ILogger<MVCController> _logger;

        public MVCController(ILogger<MVCController> logger)
        {
            _logger = logger;
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