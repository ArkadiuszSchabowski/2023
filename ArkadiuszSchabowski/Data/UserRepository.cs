namespace ArkadiuszSchabowski.Data
{
    public class UserRepository
    {
        private List<User> users = new List<User>();
        public void AddUsers(int id, string email, string password)
        {
            User user = new User();
            user.Id = id;
            user.Email = email;
            user.Password = password;
            users.Add(user);
        }
        public List<User> GetUsers()
        {
            return users;
        }
    }
}
