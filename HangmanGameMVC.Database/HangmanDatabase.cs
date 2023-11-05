using System.ComponentModel.DataAnnotations;

namespace HangmanGameMVC.Database
{
    public class HangmanDatabase
    {
        public int Id { get; set; }
        public int Length { get; set; }
        [Required]
        public string Hint { get; set; }
        public string Answer { get; set; }
        public string DifficultyLevel { get; set; }
    }
}
