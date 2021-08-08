using Calculator.Entities;
using Calculator.IServices;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Calculator.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CalculationController : ControllerBase
    {

        private readonly ICalculationService _calculationService;
        public CalculationController(ICalculationService calculationService)
        {
            _calculationService = calculationService;
        }

        [HttpGet]
        public IActionResult Get(string expression)
        {
            try
            {
                double result = _calculationService.DoCalculation(expression);
                return Ok(new CalcResponse() { Result = result.ToString()});
            }
            catch(Exception ex)
            {
                return Ok(new CalcResponse() { IsError = true, Description = ex.Message });

            }

        }
    }
}
