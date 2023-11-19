using Microsoft.EntityFrameworkCore;

namespace EnglishFlashCards_MVC.Database
{
    public class WordAdder
    {
        private readonly MyDbContext _context;
        public WordAdder(MyDbContext context)
        {
            _context = context;
        }

        public void AddWord(string polishWord, string englishWord, bool isToLearnBool)
        {
            Word word = new Word()
            {
                PolishWord = polishWord,
                EnglishWord = englishWord,
                isToLearn = isToLearnBool
            };
            _context.Words.Add(word);
            _context.SaveChanges();
        }
    }
}
