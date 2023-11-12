using GEOTIK_ArkadiuszSchabowski.Database;

namespace GEOTIK_ArkadiuszSchabowski.Service
{
    public interface IUserService
    {
        void InitialUsers();
        User GetUser(int id);
    }
    public class UserService : IUserService
    {

        private readonly MyDbContext _context;
        public UserService(MyDbContext context)
        {
            _context = context;
        }

        public void InitialUsers()
        {
            _context.Users.Add(new User {
                Email = "aneta@o2.pl",
                Password = "123",
            });
            _context.Users.Add(new User
            {
                Email = "monika@interia.pl",
                Password = "123",
            });
            _context.Users.Add(new User
            {
                Email = "janusz@gmail.com",
                Password = "123",
            });
            _context.SaveChanges();
        }
        public User GetUser(int id)
        {
            return _context.Users.FirstOrDefault(u => u.Id == id);
        }

    }
}
