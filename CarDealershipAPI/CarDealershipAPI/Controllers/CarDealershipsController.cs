using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using CarDealershipAPI.Models;

namespace CarDealershipAPI.Controllers
{
    public class CarDealershipsController : ApiController
    {
        private CarDealershipContext CDDB = new CarDealershipContext();

        // GET api/carDealerships
        [HttpGet]
        [ResponseType(typeof(IEnumerable<CarDealership>))]
        public IQueryable<CarDealership> Get()
        {
            return CDDB.CarDealerships;

        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                CDDB.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
