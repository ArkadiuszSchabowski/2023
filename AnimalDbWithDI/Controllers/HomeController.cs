using AnimalDbWithDI.Database;
using AnimalDbWithDI.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace AnimalDbWithDI.Controllers
{
    public class HomeController : Controller
    {
        private readonly IEmailSenderService _emailService;
        private readonly IUserService _userService;

        public HomeController(IEmailSenderService emailService, IUserService userService)
        {
            _emailService = emailService;
            _userService = userService;
        }

        public IActionResult Index()
        {
            //using(var context=new MyDbContext())
            //{
            //    var user1 = new User()
            //    {
            //        Email = "user1@example.com",
            //        Password = "password1"
            //    };
            //    var user2 = new User()
            //    {
            //        Email = "user2@example.com",
            //        Password = "password2"
            //    };
            //    var user3 = new User()
            //    {
            //        Email = "user3@example.com",
            //        Password = "password3"
            //    };
            //    context.Users.AddRange(user1, user2, user3);
            //    context.SaveChanges();
            //}
            _emailService.SendEmail("Hello World");
            _userService.AddInitialUsers();

            return View();
        }
    }
}
