using ExamMVCDatabase.Database;
using ExamMVCDatabase.TestModel;

namespace ExamMVCDatabase
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            builder.Services.AddControllersWithViews();

            using (var context = new MyDbContext())
            {
                var animal = new Animal()
                {
                    ID = 1,
                    Name = "Guinea Pig",
                    Predator = false
                };
                context.Animals.Add(animal);
                context.SaveChanges();
            }
            var app = builder.Build();

            if (!app.Environment.IsDevelopment())
            {
                app.UseExceptionHandler("/Home/Error");
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            app.MapControllerRoute(
                name: "default",
                pattern: "{controller=Home}/{action=Index}/{id?}");

            app.Run();
        }
    }
}