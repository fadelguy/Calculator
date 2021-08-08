using Calculator.BL;
using System;
using Xunit;

namespace Calculator.Test
{
    public class UnitTest
    {
        [Fact]
        public void TestOperatorsOrder()
        {
            Assert.Equal("6", Perform("2+2*2"));
        }

        [Fact]
        public void TestDouble()
        {
            Assert.Equal("6.4", Perform("2+2.2*2"));
        }

        [Fact]
        public void TestThrowDivideByZeroException()
        {
            Action action = () => Perform("1/0");
            var caughtException = Assert.Throws<DivideByZeroException>(action);
            Assert.Equal("Attempted to divide by zero.", caughtException.Message);
        }
        private string Perform(string expression)
        {
            Expression exp = new Expression(expression);
            return exp.EvaluateRecursive().ToString();
        }
    }
}
