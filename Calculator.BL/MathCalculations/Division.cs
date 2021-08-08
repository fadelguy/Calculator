using System;
using Calculator.BL.Abstract;

namespace Calculator.BL.MathCalculations
{
    internal class Division : BaseMathCalculation
    {
        public Division(double leftNum, double rightNum) : base(leftNum, rightNum)
        { }

        public override double Calculate()
        {
            if (RightNum == 0)
                throw new DivideByZeroException();
            return LeftNum / RightNum;
        }
    }
}