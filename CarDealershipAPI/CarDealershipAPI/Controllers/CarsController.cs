using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using CarDealershipAPI.Enums;
using CarDealershipAPI.Models;

namespace CarDealershipAPI.Controllers
{
    public class CarsController : ApiController
    {
        private CarDealershipContext CDDB = new CarDealershipContext();

        // GET api/cars
        [HttpGet]
        public IQueryable<Car> Get()
        {
            return CDDB.Cars;
        }
        
        // POST api/cars  
        [HttpPost]
        [ResponseType(typeof(Car))]
        public IHttpActionResult Post(Car car)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if (!HasReferentialIntegrity(car)) {
                return BadRequest();
            }

            CDDB.Cars.Add(car);
            CDDB.SaveChanges();
            SaveAudit(car, AuditAction.Insert);
            return CreatedAtRoute("DefaultApi", new
            {
                id = car.CarID
            }, car);
        }

        // PUT api/cars/5  
        [HttpPut]
        [ResponseType(typeof(Car))]
        public IHttpActionResult Put(int id, Car car)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if (id != car.CarID)
            {
                return BadRequest();
            }
            CDDB.Entry(car).State = EntityState.Modified;
            try
            {
                CDDB.SaveChanges();
                SaveAudit(car, AuditAction.Edit);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CarExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return Ok(car);
        }

        // DELETE api/cars/5  
        [HttpDelete]
        [ResponseType(typeof(Car))]
        public IHttpActionResult Delete(int id)
        {
            Car car = CDDB.Cars.Find(id);
            if (car == null)
            {
                return NotFound();
            }
            CDDB.Cars.Remove(car);
            CDDB.SaveChanges();
            SaveAudit(car, AuditAction.Delete);
            return Ok(car);
        }

        private void SaveAudit(Car car, AuditAction action)
        {
            Audit newAudit = new Audit();
            newAudit.Datetime = DateTime.Now;
            newAudit.CarID = car.CarID;
            newAudit.Action = action;
            CDDB.Audits.Add(newAudit);
            CDDB.SaveChanges();
        }

        private bool HasReferentialIntegrity(Car car)
        {
            return CDDB.Brands.Count(b => b.BrandID == car.BrandID) != 0 &&
                CDDB.CarDealerships.Count(cd => cd.CarDealershipID == car.CarDealershipID) != 0;
        }

        private bool CarExists(int id)
        {
            return CDDB.Cars.Count(e => e.CarID == id) > 0;
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
