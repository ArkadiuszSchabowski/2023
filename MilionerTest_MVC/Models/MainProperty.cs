namespace MilionerTest_MVC.Models
{
    public class MainProperty
    {
        public string Question { get; set; }
        public string[] Answers { get; set; }
        public int CorrectedAnswerIndex { get; set; }

        public MainProperty(string question, string[] answers, int correctedAnswerIndex)
        {
            this.Question = question;
            this.Answers = answers;
            this.CorrectedAnswerIndex = correctedAnswerIndex;
        }
    }
}
