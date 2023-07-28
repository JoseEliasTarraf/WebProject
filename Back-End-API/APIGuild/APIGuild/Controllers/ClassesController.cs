using APIGuild.Data;
using APIGuild.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace APIGuild.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClassesController : ControllerBase
    {
        readonly private DataContext _context;

        public ClassesController(DataContext context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult AddGear(int id,int pa,int paa,int pd,int lvl,string family,string username)
        {
            Classes classes = new Classes();

            classes.CharName = username;
            classes.PD = pd;
            classes.FamilyName = family;
            classes.PA = pa;
            classes.PAA = paa;
            classes.LVL = lvl;
            classes.UserId = id;
            if(pa > paa)
            {
                classes.GS = pa + pd;
            }
            else
            {
                classes.GS = paa + pd;
            }
            
            _context.classes.Add(classes);
            _context.SaveChanges();

            return CreatedAtAction("GetGear", new { id = classes.ID }, classes);
        }

        [HttpGet]
        public IActionResult GetGear(int id)
        {
            var classesDb = _context.classes.Where(c => c.UserId == id).ToList();

            if (classesDb == null)
            {
                return NotFound();
            }
            return new JsonResult(classesDb);
        }
    }
}
