using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace CarDealershipAPI.Models
{
    public class CarDealershipContextInitializer : DropCreateDatabaseAlways<CarDealershipContext>
    {
        protected override void Seed(CarDealershipContext context)
        {
            IList<CarDealership> defaultCarDealerships = new List<CarDealership>();
            defaultCarDealerships.Add(new CarDealership() { Name = "Málaga Wagen", Address = "Av. de Velázquez, 62, Málaga" });
            defaultCarDealerships.Add(new CarDealership() { Name = "Volvo Málaga", Address = "Av. de Velázquez, 192, Málaga" });
            defaultCarDealerships.Add(new CarDealership() { Name = "Renault Tahermo", Address = "Calle de Alfredo Corrochano, 109, Málaga" });
            defaultCarDealerships.Add(new CarDealership() { Name = "ServiHonda", Address = "Av. de José Ortega y Gasset, 210, Málaga" });
            context.CarDealerships.AddRange(defaultCarDealerships);

            IList<Brand> defaultBrands = new List<Brand>();
            defaultBrands.Add(new Brand() { Name = "Audi"});
            defaultBrands.Add(new Brand() { Name = "Volkswagen" });
            defaultBrands.Add(new Brand() { Name = "Seat" });
            defaultBrands.Add(new Brand() { Name = "Skoda" });
            defaultBrands.Add(new Brand() { Name = "Volvo" });
            defaultBrands.Add(new Brand() { Name = "Lotus" });
            defaultBrands.Add(new Brand() { Name = "Renault" });
            defaultBrands.Add(new Brand() { Name = "Dacia" });
            defaultBrands.Add(new Brand() { Name = "Nissan" });
            defaultBrands.Add(new Brand() { Name = "Honda" });
            context.Brands.AddRange(defaultBrands);

            base.Seed(context);
        }
    }
}