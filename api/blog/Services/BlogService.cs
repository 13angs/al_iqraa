using AutoMapper;
using blog.DTOs;
using blog.Interfaces;
using blog.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace blog.Services
{
    public class BlogService : IBlogService
    {
        private readonly IMapper mapper;
        private readonly IMongoCollection<Blog> _blog;

        public BlogService(IMapper mapper, IOptions<BlogStoreDbSettings> settings)
        {
            this.mapper = mapper;
            var mongoClient = new MongoClient(
                settings.Value.ConnectionString
            );

            var mongoDb = mongoClient.GetDatabase(
                settings.Value.DatabaseName
            );

            System.Console.Write(settings.Value.BlogCollectionName);

            _blog = mongoDb.GetCollection<Blog>(
                settings.Value.BlogCollectionName
            );
        }
        public Blog Create(AddBlogModel model)
        {
            try
            {
                // auto gen slug if not specified
                // or null
                // with all lowercase
                Blog blog = new Blog();
                blog = mapper.Map(model, blog);

                _blog.InsertOne(blog);
                return blog;
            }
            catch
            {
                throw new NullReferenceException();
            }

            throw new NullReferenceException();
        }

        public IEnumerable<GetBlogModel> Get(BlogParam param)
        {

            IEnumerable<Blog> blogs = new List<Blog>();
            if (String.IsNullOrEmpty(param.Status))
            {
                blogs = _blog.Find(b => true).ToList();
            }
            else
            {
                blogs = _blog.Find(b => b.Status == param.Status).ToList();
            }


            IEnumerable<GetBlogModel> models = new List<GetBlogModel>();

            models = mapper.Map<IEnumerable<Blog>, IEnumerable<GetBlogModel>>(blogs);

            return models;

        }
    }
}