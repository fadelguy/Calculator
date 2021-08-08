using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Calculator.BL.Abstract
{
    abstract public class BaseExpression
    {
        public string expression { get; }

        public BaseExpression(string expression)
        {
            this.expression = expression;
        }

        abstract public double EvaluateRecursive();
    }
}
