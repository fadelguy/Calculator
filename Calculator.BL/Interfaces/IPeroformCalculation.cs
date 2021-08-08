using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Calculator.BL.Interfaces
{
    internal interface IPeroformCalculation
    {
        double perform(char op, double leftNum, double rightNum);
    }
}
