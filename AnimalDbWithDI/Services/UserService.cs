using AnimalDbWithDI.Database;

namespace AnimalDbWithDI.Services
{
    public interface IUserService
    {
        void AddInitialUsers();
    }
    public class UserService : IUserService
    {
        private readonly MyDbContext _myDbContext;

        public UserService(MyDbContext myDbContext)
        {
            _myDbContext = myDbContext;
        }

        public void AddInitialUsers()
        {
            var initialUsers = new List<User>
        {
            new User { Email = "user1@example.com", Password = "password1" },
            new User { Email = "user2@example.com", Password = "password2" },
            new User { Email = "user3@example.com", Password = "password3" }
        };

            _myDbContext.Users.AddRange(initialUsers);
            _myDbContext.SaveChanges();

        }
    }
}
