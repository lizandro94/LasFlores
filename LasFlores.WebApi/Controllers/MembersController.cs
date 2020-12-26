using LasFlores.Data;
using LasFlores.Data.Extensions;
using LasFlores.WebApi.Data;
using Microsoft.AspNetCore.Mvc;

namespace LasFlores.WebApi.Controllers
{
    [Route("members")]
    public class MembersController : ControllerBase
    {
        protected LasFloresDbContext DbContext { get; set; }

        public MembersController(LasFloresDbContext dbContext)
        {
            DbContext = dbContext;
        }

        public IActionResult Index()
        {
            var members = DbContext.Members.GetMembers();
            return Ok(members);
        }

        [HttpPost("Populate")]
        public IActionResult PopulateFromJson()
        {
            DbContext.Members.Populate();
            DbContext.SaveChanges();
            return Ok();
        }
    }
}
