using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SumArrayElements
{
    public static class ProgramArray
    {
        public static int CalculateSum(int[] arr)
        {
            int sum = 0;
            foreach (int num in arr)
            {
                sum += num;
            }
            return sum;
        }
        public static int FindLargestNumber(int[] arr)
        {
            int maxNumber = arr.Max();
            Console.WriteLine(maxNumber);
            Console.ReadLine();
            return maxNumber;
        }
        static void Main(string[] args)
        {
            int[] arr = new int[0]
            {

            };
            int sum = CalculateSum(arr);
            Console.WriteLine("Twoja suma to: " + sum);
            Console.ReadKey();
        }
    }
}
