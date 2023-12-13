using WordMaster.Database;
using WordMaster.Database.Entities;

namespace WordMaster.Services
{
    public interface IWordService
    {
        int Create(Word word);
        Word? GetWord(int id);
        IEnumerable<Word> GetAllWords();
        bool Delete(int id);
        int Update(int id, Word word);
    }

    public class WordService : IWordService
    {
        private readonly MyDbContext _context;
        public WordService(MyDbContext context)
        {
            _context = context;
        }
        public IEnumerable<Word> GetAllWords()
        {
            return _context.Words.ToList();
        }
        public Word? GetWord(int id)
        {
            var word = _context.Words.FirstOrDefault(x => x.Id == id);

            if (word is null) return null;

            return word;
        }

        public bool Delete(int id)
        {
            var currentWord = _context.Words.FirstOrDefault(x => x.Id == id);

            if (currentWord == null)
            {
                return false;
            }
            _context.Words.Remove(currentWord);
            _context.SaveChanges();
            return true;
        }
        public int Create(Word word)
        {
            var newWord = new Word()
            {
                PolishWord = word.PolishWord.ToUpper(),
                EnglishWord = word.EnglishWord.ToUpper()
            };

            var polishWord = _context.Words.FirstOrDefault(x => x.PolishWord == word.PolishWord);
            var englishWord = _context.Words.FirstOrDefault(x => x.EnglishWord == word.EnglishWord);

            if (polishWord != null)
            {
                return 0;
            }
            if(englishWord != null)
            {
                return 1;
            }

            _context.Words.Add(newWord);
            _context.SaveChanges();
            return 2;
        }
        public int Update(int id, Word word)
        {
            var currentWord = _context.Words.FirstOrDefault(x => x.Id == id);

            if (currentWord == null)
            {
                return 0;
            }

            currentWord.PolishWord = word.PolishWord.ToUpper();
            currentWord.EnglishWord = word.EnglishWord.ToUpper();

            var newPolishWord = _context.Words.FirstOrDefault(x => x.PolishWord == currentWord.PolishWord);
            var newEnglishWord = _context.Words.FirstOrDefault(x => x.EnglishWord == currentWord.EnglishWord);

            if (newPolishWord != null && newEnglishWord != null)
            {
                return 1;
            }

            _context.Update(currentWord);
            _context.SaveChanges();

            return 2;
        }
    }
}
