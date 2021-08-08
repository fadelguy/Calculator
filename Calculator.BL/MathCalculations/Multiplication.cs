using Calculator.BL.Abstract;

namespace Calculator.BL.MathCalculations
{
    internal class Multiplication : BaseMathCalculation
    {
        public Multiplication(double leftNum, double rightNum) : base(leftNum, rightNum)
        { }

        public override double Calculate()
        {
            return LeftNum * RightNum;
        }
    }
}
