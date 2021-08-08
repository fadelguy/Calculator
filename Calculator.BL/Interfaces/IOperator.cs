using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Calculator.BL.Interfaces
{
    internal interface IOperator
    {
        bool IsOperator(char op);
        int GetPriority(char op);
    }
}
