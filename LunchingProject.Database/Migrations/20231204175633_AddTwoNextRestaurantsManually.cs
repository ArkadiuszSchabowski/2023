using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace LunchingProject.Database.Migrations
{
    /// <inheritdoc />
    public partial class AddTwoNextRestaurantsManually : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Restaurants",
                column: "Name",
                value: "Hong Viet"
                );

            migrationBuilder.InsertData(
                table: "Restaurants",
                column: "Name",
                value: "Thai Hong Carrefour"
    );
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Restaurants",
                keyColumn: "Name",
                keyValue: "Hong Viet"
    );

            migrationBuilder.DeleteData(
                table: "Restaurants",
                keyColumn: "Name",
                keyValue: "Thai Hong Carrefour"
    );
        }
    }
}
