using AutoMapper;
using blog.DTOs;
using blog.Interfaces;
using blog.Models;

namespace blog.Services
{
    public class BlogServices : IBlog
    {
        private readonly IMapper mapper;
        private readonly IQContext dbContext;

        public BlogServices(IMapper mapper, IQContext dbContext)
        {
            this.mapper = mapper;
            this.dbContext = dbContext;
        }
        public async Task<Blog> AddBlog(AddBlogModel model)
        {
            try
            {
                // auto gen slug if not specified
                // or null
                // with all lowercase
                if (String.IsNullOrEmpty(model.Slug))
                {
                    string slug = model.Title.Replace(' ', '-');
                    model.Slug = slug.ToLower();
                }

                Blog blog = new Blog();
                blog = mapper.Map(model, blog);

                if (blog != null)
                {
                    dbContext.IQBlogs.Add(blog);
                    await dbContext.SaveChangesAsync();
                    return blog;
                }
            }
            catch
            {
                throw new NullReferenceException();
            }

            throw new NullReferenceException();
        }


    }
}