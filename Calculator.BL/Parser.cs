using Calculator.BL.Abstract;
using Calculator.BL.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Calculator.BL
{
    public class Parser : BaseParser
    {
        private IOperator @operator;
        private IOperand operand;

        public Parser(string expression) : base(expression)
        {
            @operator = new Operator();
            operand = new Operand();
        }

        override public string Prefix()
        {
            Stack<char> operators = new Stack<char>();
            Stack<string> operands = new Stack<string>();
            for (int i = 0; i < expression.Length; i++)
            {


                if (!@operator.IsOperator(expression[i]))
                {
                    StringBuilder token = new StringBuilder();
                    while (i < expression.Length && operand.IsOperand(expression[i]))
                    {
                        token.Append(expression[i++]);
                    }
                    operands.Push(token.ToString());
                    i--;
                }
                else
                {
                    while (operators.Count != 0 && @operator.GetPriority(expression[i]) <= @operator.GetPriority(operators.Peek()))
                    {
                        string op1 = operands.Peek();
                        operands.Pop();
                        string op2 = operands.Peek();
                        operands.Pop();
                        char op = operators.Peek();
                        operators.Pop();
                        string tmp = op + " " + op2 + " " + op1;
                        operands.Push(tmp);
                    }
                    operators.Push(expression[i]);
                }
            }
            while (operators.Count != 0)
            {
                string op1 = operands.Peek();
                operands.Pop();
                string op2 = operands.Peek();
                operands.Pop();
                char op = operators.Peek();
                operators.Pop();
                string tmp = op + " " + op2 + " " + op1;
                operands.Push(tmp);
            }
            return operands.Peek();
        }
    }
}
