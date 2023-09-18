using System;
using System.Linq;

namespace PolishSpoj
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Arrays();
        }
        static void Arrays()
        {
            int[] newArray = new int[]
            {
                1,2,3,4,5,6,7,8,9
            };
            int[] reverseArray = newArray.Reverse().ToArray();
            foreach (int el in reverseArray) {
                Console.WriteLine(el);
            }
            Console.ReadLine();
        }
    }
}
