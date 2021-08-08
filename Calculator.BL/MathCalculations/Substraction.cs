using Calculator.BL.Abstract;

namespace Calculator.BL.MathCalculations
{
    internal class Substraction : BaseMathCalculation
    {
        public Substraction(double leftNum, double rightNum) : base(leftNum, rightNum)
        { }

        public override double Calculate()
        {
            return LeftNum - RightNum;
        }
    }
}
