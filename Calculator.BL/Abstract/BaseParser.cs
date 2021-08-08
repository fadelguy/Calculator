using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Calculator.BL.Abstract
{
    abstract public class BaseParser
    {
        public string expression { get; }

        public BaseParser(string expression)
        {
            this.expression = expression;
        }

        abstract public string Prefix();
    }
}
