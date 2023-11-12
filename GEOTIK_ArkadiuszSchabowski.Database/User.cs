using System.ComponentModel.DataAnnotations;

namespace GEOTIK_ArkadiuszSchabowski.Database
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
