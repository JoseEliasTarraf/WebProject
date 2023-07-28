using APIGuild.Data;
using APIGuild.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace APIGuild.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        readonly private DataContext _context;

        public UserController(DataContext context)
        {
            _context = context;
        }



        [HttpPost]
        public IActionResult AddUser(string login, string password)
        {
            User user = new User();

            user.Login = login;
            user.Password = password;

            _context.Users.Add(user);
            _context.SaveChanges();

            return CreatedAtAction("GetUser", new { id = user.ID }, user);
        }

        [HttpGet]
        public IActionResult GetUser(string login, string pass)
        {
            User userDb = _context.Users.First(u => u.Login == login && u.Password == pass);

            if (userDb == null)
            {
                return NotFound();
            }
            return new JsonResult(userDb);
        }
    }
}
