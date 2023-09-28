using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UnitTestsSeptember;

namespace UnitTestsSeptember
{

    [TestFixture]
    public static class OperationsUnitTests
    {
        [Test]
        public static void AdditionTest()
        {
            int result = Operations.Addition(5, 7);
            Assert.AreEqual(12, result);
        }
    }
}