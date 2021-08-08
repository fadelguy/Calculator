using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Calculator.IServices
{
    public interface ICalculationService
    {
        double DoCalculation(string expression);
    }
}
