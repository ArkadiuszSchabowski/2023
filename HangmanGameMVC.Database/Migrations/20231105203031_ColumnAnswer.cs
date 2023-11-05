using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HangmanGameMVC.Database.Migrations
{
    /// <inheritdoc />
    public partial class ColumnAnswer : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Question",
                table: "Databases",
                newName: "Hint");

            migrationBuilder.AddColumn<string>(
                name: "Answer",
                table: "Databases",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Answer",
                table: "Databases");

            migrationBuilder.RenameColumn(
                name: "Hint",
                table: "Databases",
                newName: "Question");
        }
    }
}
