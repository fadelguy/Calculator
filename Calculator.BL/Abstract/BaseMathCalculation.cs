using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Calculator.BL.Abstract
{
    abstract internal class BaseMathCalculation
    {
        public double LeftNum { get; set; }
        public double RightNum { get; set; }

        public BaseMathCalculation(double leftNum, double rightNum)
        {
            this.LeftNum = leftNum;
            this.RightNum = rightNum;
        }

        public abstract double Calculate();
    }
}
