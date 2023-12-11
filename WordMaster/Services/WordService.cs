using WordMaster.Database;
using WordMaster.Database.Entities;

namespace WordMaster.Services
{
    public interface IWordService
    {
        bool Create(Word word);
        Word GetWord(int id);
        IEnumerable<Word> GetAllWords();
        bool Delete(int id);
        bool Update(int id, Word word);
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
        public Word GetWord(int id)
        {
            var word = _context.Words.FirstOrDefault(x => x.Id == id);

            if (word is null) return null;

            return word;
        }
        public bool Create(Word word)
        {
            var newWord = new Word()
            {
                PolishWord = word.PolishWord,
                EnglishWord = word.EnglishWord
            };

            var polishWord = _context.Words.FirstOrDefault(x => x.PolishWord == word.PolishWord);
            var englishWord = _context.Words.FirstOrDefault(x => x.EnglishWord == word.EnglishWord);

            if (polishWord != null || englishWord != null)
            {
                return true;
            }
            _context.Words.Add(newWord);
            _context.SaveChanges();
            return false;
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
        public bool Update(int id, Word word)
        {
            var currentWord = _context.Words.FirstOrDefault(x => x.Id == id);

            if (currentWord == null)
            {
                return false;
            }

            currentWord.PolishWord = word.PolishWord;
            currentWord.EnglishWord = word.EnglishWord;

            _context.Update(currentWord);

            _context.SaveChanges();
            return true;
        }
    }
}
