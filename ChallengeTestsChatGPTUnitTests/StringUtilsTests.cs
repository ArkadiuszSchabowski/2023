using ChallengeTestsChatGPT;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit;
using System.Security.Cryptography;

namespace ChallengeTestsChatGPTUnitTests
{
    [TestFixture]
    public class StringUtilsTests
    {
        [Test]
        public void ReverseString_ReverseCharArray_GetReverseString()
        {
            //Arrange
            string input = "Kaczka";
            string expected = "akzcaK";
            
            //Act
            string result = StringUtils.ReverseString(input);
            //Assert
            Assert.AreEqual(expected, result);
        }
    }
}
