using System;

namespace Indeksery
{
    public class Program
    {
        static void Main(string[] args)
        {
            string text = "Przykladowy tekst";
            IndekseryClass indekser = new IndekseryClass(text);
            string indexedText = indekser.Indexer("Pies");
            Console.WriteLine(indexedText);
        }
    }

    internal class IndekseryClass
    {
        private string text;

        public IndekseryClass(string text)
        {
            this.text = text;
        }

        public string Indexer(string word)
        {
            int index = text.IndexOf(word);
            if (index != -1)
            {
                return text.Substring(index, word.Length);
            }
            else
            {
                return "Brak dopasowania";
            }
        }
    }
}
