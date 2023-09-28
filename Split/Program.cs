using System;
using System.Collections;

namespace Split
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string text = Console.ReadLine();
            string formatedText = FormattedText(text);
            Console.WriteLine(formatedText);
        }

        static string FormattedText(string text)
        {
            string[] arrayText = text.Split(' ');
            string formatedText = "";

            foreach (string item in arrayText)
            {
                string word = item;
                string newFirstLetter = word[0].ToString().ToUpper();
                string restOfWord = word.Substring(1);
                string newWord = newFirstLetter + restOfWord;
                formatedText += newWord;
            }
                return formatedText;
        }
    }
}
