using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace APIGuild.Migrations
{
    /// <inheritdoc />
    public partial class UpdateDb : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "classes",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PA = table.Column<int>(type: "int", nullable: false),
                    PAA = table.Column<int>(type: "int", nullable: false),
                    PD = table.Column<int>(type: "int", nullable: false),
                    LVL = table.Column<int>(type: "int", nullable: false),
                    GS = table.Column<int>(type: "int", nullable: false),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    FamilyName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CharName = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_classes", x => x.ID);
                    table.ForeignKey(
                        name: "FK_classes_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_classes_UserId",
                table: "classes",
                column: "UserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "classes");
        }
    }
}
