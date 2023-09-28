using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Program.UnitTests
{
    [TestFixture]
    public static class FindLargestNumberAndTests_Tests
    {
        [Test]
        public static void FindLargestNumber_FindTheLargestNumberInArray_GetResult()
        {
        int[] arr = { 1, 3, 7, 8 };

            int result = FindLargestNumberAndTests.Program.FindLargestNumber(arr);

            Assert.AreEqual(8, result);
        }
    }
}
