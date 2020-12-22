using LasFlores.WebApi.Data;
using Microsoft.AspNetCore.Mvc;

namespace LasFlores.WebApi.Controllers
{
    [Route("members")]
    [ApiController]
    public class MembersController : ControllerBase
    {
        public IActionResult Index()
        {
            var members = MembersData.GetMembers();
            return Ok(members);
        }
    }
}
