using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserApp.Data.DTOs;
using UserApp.Models;

namespace UserApp.Profiles
{
    public class UserProfile : Profile
    {
        public UserProfile()
        {
            CreateMap<CreateUserDto, User>();
            CreateMap<User, ReadUserDto>();
            CreateMap<UpdateUserDto, User>();
        }

    }

}
