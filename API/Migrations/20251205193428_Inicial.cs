using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    /// <inheritdoc />
    public partial class Inicial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Imcs",
                columns: table => new
                {
                    ImcId = table.Column<string>(type: "TEXT", nullable: false),
                    Nome = table.Column<string>(type: "TEXT", nullable: true),
                    Altura = table.Column<double>(type: "REAL", nullable: false),
                    Peso = table.Column<double>(type: "REAL", nullable: false),
                    ImcValor = table.Column<double>(type: "REAL", nullable: false),
                    Classificacao = table.Column<string>(type: "TEXT", nullable: true),
                    DataCriacao = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Imcs", x => x.ImcId);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Imcs");
        }
    }
}
