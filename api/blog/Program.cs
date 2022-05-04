using blog.Interfaces;
using blog.Models;
using blog.Services;
using Microsoft.EntityFrameworkCore;
using blog.Hubs;

var builder = WebApplication.CreateBuilder(args);

var configuration = builder.Configuration;

// configure cors to any allowed
// any registered origins

string CorsName = configuration["Cors:Name"];
string allowedOriginsStr = configuration["Cors:AllowedOrigins"];
string[] allowedOriginsArr = allowedOriginsStr.Split(";");

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: CorsName, build =>
    {
        build.WithOrigins(allowedOriginsArr)
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials();
    });
});

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

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

// Configure SignalR
// The SignalR server must be configured to pass SignalR requests to SignalR.
builder.Services.AddSignalR();

var app = builder.Build();


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors(CorsName);

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();
app.MapHub<BlogHub>("/blogHub");

app.Run();
