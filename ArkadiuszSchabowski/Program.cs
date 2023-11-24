
using ArkadiuszSchabowski.Data;

namespace ArkadiuszSchabowski
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);


            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();


            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            UserRepository user = new UserRepository();

            user.AddUsers(1, "Dominika@gmail.com", "pies");
            user.AddUsers(2, "Paulina@gmail.com", "kot");
            user.AddUsers(3, "Monika@gmail.com", "khomyak");

            app.Run();
        }
    }
}
