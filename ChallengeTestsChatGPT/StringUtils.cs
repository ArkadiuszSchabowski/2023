using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ChallengeTestsChatGPT
{
    public class StringUtils
    {
        public static string ReverseString(string input)
        {
            char[] charArray = input.ToCharArray();
            Array.Reverse(charArray);
            return new string(charArray);
        }


        static void Main(string[] args)
        {
            string newText = ReverseString("Pies");
            Console.WriteLine(newText);
            Console.ReadKey();
        }
    }
}