using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserApp.Models;

namespace UserApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
       
       
        private static List<User> usuarios = new List<User>();
        private static int codigo = 1;

        [HttpPost]
        public IActionResult AddUser([FromBody] User usuario)
        {
            usuario.Codigo = codigo++;
            usuarios.Add(usuario);

            return CreatedAtAction(nameof(ListUserId), new { codigo = usuario.Codigo }, usuario);
        }

        [HttpGet]
        public IActionResult ListUser()
        {
            return Ok(usuarios);
        }

        [HttpGet("{codigo}")]
        public IActionResult ListUserId(int codigo)
        {

            User usuario = usuarios.FirstOrDefault(usuario => usuario.Codigo == codigo);

            if (usuario != null)
            {
                return Ok(usuario);
            }

            return NotFound();
        }
    }
}
