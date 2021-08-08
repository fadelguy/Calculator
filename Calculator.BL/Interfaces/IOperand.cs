using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Calculator.BL.Interfaces
{
    internal interface IOperand
    {
        bool IsOperand(char op);
    }
}
