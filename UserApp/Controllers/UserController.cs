using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserApp.Data;
using UserApp.Data.DTOs;
using UserApp.Models;

namespace UserApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private UserContext userContext;
        private IMapper userMapper;

        public UserController(UserContext userContext, IMapper userMapper)
        {
            this.userContext = userContext;
            this.userMapper = userMapper;
        }

        [HttpPost]
        public IActionResult AddUser([FromBody] CreateUserDto userDto)
        {
            User usuario = userMapper.Map<User>(userDto);

            userContext.Usuarios.Add(usuario);
            userContext.SaveChanges();

            return CreatedAtAction(nameof(ListUserId), new { codigo = usuario.Codigo }, usuario);
        }

        [HttpGet]
        public IEnumerable<User> ListUser()
        {
            return userContext.Usuarios;
        }

        [HttpGet("{codigo}")]
        public IActionResult ListUserId(int codigo)
        {

            User usuario = userContext.Usuarios.FirstOrDefault(usuario => usuario.Codigo == codigo);

            if (usuario != null)
            {
                ReadUserDto userDto = userMapper.Map<ReadUserDto>(usuario);

                return Ok(userDto);
            }

            return NotFound();
        }

        [HttpPut("{codigo}")]
        public IActionResult UpdateUser(int codigo, [FromBody] UpdateUserDto userDto)
        {
            User usuario =  userContext.Usuarios.FirstOrDefault(usuario => usuario.Codigo == codigo);

            if(usuario == null)
            {
                return NotFound();
            }

            userMapper.Map(userDto, usuario);

            userContext.SaveChanges();

            return NoContent();
        }

        [HttpDelete("{codigo}")]
        public IActionResult DeleteUser(int codigo)
        {
            User usuario = userContext.Usuarios.FirstOrDefault(usuario => usuario.Codigo == codigo);

            if (usuario == null)
            {
                return NotFound();
            }

            userContext.Remove(usuario);
            userContext.SaveChanges();

            return NoContent();
        }
    }
}
