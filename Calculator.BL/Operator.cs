using Calculator.BL.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Calculator.BL
{
    internal class Operator : IOperator
    {
        public bool IsOperator(char op)
        {
            return op == '+' || op == '-' || op == '/' || op == '*';
        }

        public int GetPriority(char op)
        {
            if (op == '-' || op == '+')
                return 1;
            else if (op == '*' || op == '/')
                return 2;
            return 0;
        }

    }
}
