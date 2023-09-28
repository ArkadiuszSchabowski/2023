using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit;
using NUnit.Framework;
using OwnTests;

namespace OwnTestsUnitTest
{
    [TestFixture]
    internal class OperationsTests
    {
        [Test]
       public void Substraction_ShouldGetResult_Result()
        {
            //Arrange
            int result;
            //Act
            result = Operations.Substraction(9, 3);
            //Assert
            Assert.AreEqual(6, result);
        }
    }
}
