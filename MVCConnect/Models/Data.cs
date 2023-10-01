using System.Globalization;
using Newtonsoft.Json;

namespace MVCConnect.Models
{
    public class QuestionData
    {
        public string Text { get; set; }
        public string[] Answers { get; set; }
        public int CorrectAnswerIndex { get; set; }
    }
}