using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata.Ecma335;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;
using Microsoft.VisualStudio.TestPlatform.TestHost;
using NUnit;
using NUnit.Framework;
using SumArrayElements;

namespace SumArrayElementsUnitTests
{
    [TestFixture]
    public class ProgramArrayTests
    {
        [Test]
        public void CalculateSum_IfNumbersArePositive_GetResult()
        {
            //arrange
            int[] arr = { 91, 4, 5 };
            //act
            int result = ProgramArray.CalculateSum(arr);
            //assert
            Assert.AreEqual(100, result);
        }
        [Test]
        public void CalculateSum_IfNumbersAreNegative_GetResult()
        {
            int[] arr = { -1, -3, -6 };

            int result = ProgramArray.CalculateSum(arr);

            Assert.AreEqual(-10, result);
        }
        [Test]
        public void CalculateSum_IfNumbersArePositiveAndNegative_GetResult()
        {
            int[] arr = { 19, 1, -25 };

            int result = ProgramArray.CalculateSum(arr);

            Assert.AreEqual(-5, result);
        }
        [Test]
        //Dla pustej tablicy
        public void CalculateSum_IfLengthArrayIsEqualZero_GetResult()
        {
            int[] arr = {};

            int result = ProgramArray.CalculateSum(arr);

            Assert.AreEqual(0, result);
        }
        [Test]
        public void CalculateSum_IfArrayContainsOnlyOneElement_GetResult()
        {
            int[] arr = { 7 };

            int result = ProgramArray.CalculateSum(arr);

            Assert.AreEqual(7, result);
        }
        [Test]
        public static void FindLargestNumber_FindTheLargestNumberInArray_GetResult()
        {
            int[] arr = { 1, 3, 7, 8 };

            int result = ProgramArray.FindLargestNumber(arr);

            Assert.AreEqual(8, result);
        }

    }
}
