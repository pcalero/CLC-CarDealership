using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace CarDealershipAPI.Models
{
    public class Car
    {
        public int CarID { get; set; }

        [Required]
        public string CarNumberPlate { get; set; }

        [Required]
        public int? CarDealershipID { get; set; }

        [Required]
        public int? BrandID { get; set; }

        [Required]
        public int? Kilometers { get; set; }
    }
}