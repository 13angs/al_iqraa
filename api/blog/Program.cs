using blog.Interfaces;
using blog.Models;
using blog.Services;
using Microsoft.EntityFrameworkCore;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var configuration = builder.Configuration;

// resgister dbcontext
builder.Services.AddDbContextPool<IQContext>(options =>
{
    // abstract all the connection string
    // for easy to change when in runtime
    string Server = configuration["MariaDb:Server"];
    string Port = configuration["MariaDb:Port"];
    string Password = configuration["MariaDb:Password"];
    string Database = configuration["MariaDb:Database"];
    string UserId = configuration["MariaDb:UserId"];

    string IqConStr = string.Format(
        "server={0},{1}; user id={2}; database={3}; password={4}",
        Server, Port, UserId, Database, Password
    );

    options.UseMySql(
        IqConStr,
        ServerVersion.AutoDetect(IqConStr)
    );
});

// regiser all the dependency injections
builder.Services.AddScoped<IBlog, BlogServices>();

// register auto mappers
builder.Services.AddAutoMapper(typeof(Program).Assembly);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
