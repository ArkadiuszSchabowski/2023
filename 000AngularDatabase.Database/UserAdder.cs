namespace _000AngularDatabase.Database
{
    public class UserAdder
    {
        private readonly MyDbContext _context;

        public UserAdder(MyDbContext context)
        {
            _context = context;
        }

        public void AddUser(int id, string name)
        {
            User user = new User()
            {
                Id = id,
                Name = name
            };

            _context.Users.Add(user);
            _context.SaveChanges();
        }
    }
}
