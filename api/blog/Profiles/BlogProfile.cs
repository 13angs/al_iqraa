using AutoMapper;
using blog.DTOs;
using blog.Models;

namespace blog.Profiles
{
    public class BlogProfile : Profile
    {
        public BlogProfile()
        {
            CreateMap<Blog, AddBlogModel>()
                .ReverseMap();

            CreateMap<Blog, GetBlogModel>()
                .ReverseMap();
        }
    }
}