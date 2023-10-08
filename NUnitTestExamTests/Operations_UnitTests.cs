using NUnitTestExam;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit;
using NUnit.Framework;

namespace NUnitTestExamTests
{
    [TestFixture]
    internal class Operations_UnitTests
    {
        [Test]
        public static void AdditionUnitTests()
        {
            //arrange
            int result;
            //act
            result = Operations.Addition(5, 10);

            //assert
            Assert.AreEqual(15, result);
        }
    }
}
