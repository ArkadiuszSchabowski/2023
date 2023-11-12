using AnimalDbWithoutDI.Database;
using Microsoft.AspNetCore.Mvc;

namespace AnimalDbWithoutDI.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            using (var context = new MyDbContext())
            {
                var animal = new Animal()
                {
                    Name = "Rabbit",
                    Predator = false,
                };
                var animal2 = new Animal()
                {
                    Name = "Guinea pig",
                    Predator = false,
                };
                context.Animals.Add(animal);
                context.Animals.Add(animal2);
                context.SaveChanges();

                var animalsList = context.Animals.ToList();
                return View(animalsList);
            }

        }
    }
}
