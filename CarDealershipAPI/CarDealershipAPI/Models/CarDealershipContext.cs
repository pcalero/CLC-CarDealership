namespace CarDealershipAPI.Models
{
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Linq;

    public class CarDealershipContext : DbContext
    {
        public CarDealershipContext()
            : base("name=CarDealershipDB")
        {
            Database.SetInitializer(new CarDealershipContextInitializer());
        }
        
        public DbSet<CarDealership> CarDealerships { get; set; }
        public DbSet<Car> Cars { get; set; }
        public DbSet<Brand> Brands { get; set; }
        public DbSet<Audit> Audits { get; set; }
    }
    
}