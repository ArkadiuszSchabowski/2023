namespace MVC_3September.Models
{
    public class FirstQuestions
    {
        public string Question { get; set; }
        public string[] Answers { get; set; }
        public int CorrectAnswerIndex { get; set; }

        public FirstQuestions(string question, string[] answers, int index)
        {
            this.Question = question;
            this.Answers = answers;
            this.CorrectAnswerIndex = index;
        }
    }
}
