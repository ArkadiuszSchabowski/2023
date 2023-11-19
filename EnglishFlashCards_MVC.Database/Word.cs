namespace EnglishFlashCards_MVC.Database
{
    public class Word
    {
        public int Id { get; set; }
        public string PolishWord { get; set; }
        public string EnglishWord { get; set; }
        public bool? isToLearn { get; set; }
    }
}
