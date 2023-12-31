﻿using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EnglishFlashCards_MVC.Database.Migrations
{
    /// <inheritdoc />
    public partial class AddFirstDbSetWords : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Words",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PolishWord = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    EnglishWord = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    isToLearn = table.Column<bool>(type: "bit", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Words", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Words");
        }
    }
}
