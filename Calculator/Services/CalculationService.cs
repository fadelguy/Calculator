using Calculator.BL;
using Calculator.IServices;


namespace Calculator.Services
{
    public class CalculationService : ICalculationService
    {
        public double DoCalculation(string expression)
        {
            
            Expression exp = new Expression(expression);
            return exp.EvaluateRecursive();
        }
    }
}
