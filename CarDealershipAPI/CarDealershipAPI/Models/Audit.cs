using CarDealershipAPI.Enums;
using CarDealershipAPI.Validations;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace CarDealershipAPI.Models
{
    public class Audit 
    {

        public int AuditID { get; set; }

        public DateTime Datetime { get; set; }

        [Required]
        public int CarID { get; set; }

        [Required]
        [ValidEnumValue]
        public AuditAction Action { get; set; }

        
    }
}