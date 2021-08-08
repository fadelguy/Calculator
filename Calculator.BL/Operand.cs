using Calculator.BL.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Calculator.BL
{
    internal class Operand : IOperand
    {
        public bool IsOperand(char op)
        {
            return op >= '0' && op <= '9' || op == '.';
        }
    }
}
