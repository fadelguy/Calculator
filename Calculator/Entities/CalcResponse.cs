using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Calculator.Entities
{
    public class CalcResponse
    {
        public bool IsError { get; set; }
        public string Result { get; set; }
        public string Description { get; set; }
    }
}
