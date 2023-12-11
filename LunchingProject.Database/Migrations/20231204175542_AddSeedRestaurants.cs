using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace LunchingProject.Database.Migrations
{
    /// <inheritdoc />
    public partial class AddSeedRestaurants : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Restaurants",
                columns: new[] { "Id", "Description", "Name" },
                values: new object[,]
                {
                    { 1, "Przepyszne jedzenie dla koneserów", "Malinowy Dwór" },
                    { 2, "Smacznie i tanio", "Bourbon" },
                    { 3, "Najlepsza pizza, szybki dowóz", "Pizzeria u Batmana" }
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
