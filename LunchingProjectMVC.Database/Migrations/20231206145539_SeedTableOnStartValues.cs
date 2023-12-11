using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace LunchingProjectMVC.Database.Migrations
{
    /// <inheritdoc />
    public partial class SeedTableOnStartValues : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Restaurants",
                columns: new[] { "Id", "CloseHour", "Description", "HasDelivery", "Name", "OpenHour" },
                values: new object[,]
                {
                    { 1, 20.0, "Dania dla koneserów", false, "Malinowy Dwór", 6.0 },
                    { 2, 22.0, "Smaczne i tanio", true, "Bourbon", 7.0 },
                    { 3, 23.0, "Najlepsza pizza w mieście, szybki dojazd", true, "Pizzeria u Batmana", 11.0 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Restaurants",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Restaurants",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Restaurants",
                keyColumn: "Id",
                keyValue: 3);
        }
    }
}
