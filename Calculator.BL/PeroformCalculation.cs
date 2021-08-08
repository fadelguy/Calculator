using Calculator.BL.Abstract;
using Calculator.BL.Interfaces;
using Calculator.BL.MathCalculations;

namespace Calculator.BL
{
    internal class PeroformCalculation : IPeroformCalculation
    {
        public double perform(char op, double leftNum, double rightNum)
        {
            BaseMathCalculation calculation = null;
            switch (op)
            {
                case '+':
                    calculation = new Addition(leftNum, rightNum);
                    return calculation.Calculate();
                case '-':
                    calculation = new Substraction(leftNum, rightNum);
                    return calculation.Calculate();
                case '*':
                    calculation = new Multiplication(leftNum, rightNum);
                    return calculation.Calculate();
                case '/':
                    calculation = new Division(leftNum, rightNum);
                    return calculation.Calculate();
            }
            return 0;
        }
    }
}
