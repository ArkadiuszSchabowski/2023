using _000AngularDatabase.Database;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{
    private readonly MyDbContext _context;

    public UserController(MyDbContext context)
    {
        _context = context;
    }

    [HttpGet("GetUsers")]
    public ActionResult<IEnumerable<User>> GetUsers()
    {
        var allUsers = _context.Users.ToList();
        return Ok(allUsers);
    }
    [HttpGet("GetUser/Id")]
    public ActionResult<IEnumerable<User>> GetUser(int id)
    {
        var user = _context.Users.Find(id);
        return Ok(user);
    }
}
