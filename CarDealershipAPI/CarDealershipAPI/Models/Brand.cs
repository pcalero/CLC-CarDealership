﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace CarDealershipAPI.Models
{
    public class Brand
    {
        public int BrandID { get; set; }

        [Required]
        public string Name { get; set; }
    }
}