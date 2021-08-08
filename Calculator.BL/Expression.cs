using Calculator.BL.Abstract;
using Calculator.BL.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Calculator.BL
{
    public class Expression : BaseExpression
    {
        private IOperator @operator;
        private IOperand operand;
        private PeroformCalculation calculation;
        private Parser parser;

        public Expression(string expression) : base(expression)
        {
            @operator = new Operator();
            operand = new Operand();
            calculation = new PeroformCalculation();
            parser = new Parser(expression);
        }

        override public double EvaluateRecursive()
        {
            return EvaluateRecursive(BuildStack(parser.Prefix().Split(" ").ToArray()));
        }

        private double EvaluateRecursive(Stack<string> stack)
        {
            string op = stack.Pop();
            if (!@operator.IsOperator(op.ToCharArray()[0]))
            {
                return double.Parse(op);
            }
            else
            {
                double leftNum = EvaluateRecursive(stack);
                double rightNum = EvaluateRecursive(stack);
                return calculation.perform(op[0], leftNum, rightNum);
            }
        }

        private Stack<string> BuildStack(string[] tokens)
        {
            Stack<string> stack = new Stack<string>();
            for (int i = tokens.Length - 1; i >= 0; i--)
            {
                stack.Push(tokens[i].ToString());
            }
            return stack;
        }
    }
}
