using Calculator.BL.Abstract;

namespace Calculator.BL.MathCalculations
{
    internal class Addition : BaseMathCalculation
    {
        public Addition(double leftNum, double rightNum) : base(leftNum, rightNum)
        { }

        public override double Calculate()
        {
            return LeftNum + RightNum;
        }
    }

}
