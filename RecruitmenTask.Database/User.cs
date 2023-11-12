using System.ComponentModel.DataAnnotations;

namespace RecruitmenTask.Database
{
    public class User
    {
        public int Id { get; set; }
        [Required]
        public string EMail { get; set; }
        [Required]
        public string Password { get; set; }

    }
}
