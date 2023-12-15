﻿// <auto-generated />
using LunchingProjectMVC.Database;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace LunchingProjectMVC.Database.Migrations
{
    [DbContext(typeof(MyDbContext))]
    [Migration("20231206145539_SeedTableOnStartValues")]
    partial class SeedTableOnStartValues
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("LunchingProjectMVC.Database.Entities.Dish", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"));

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("Price")
                        .HasColumnType("float");

                    b.HasKey("ID");

                    b.ToTable("Dishes");
                });

            modelBuilder.Entity("LunchingProjectMVC.Database.Entities.Restaurant", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<double>("CloseHour")
                        .HasColumnType("float");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("HasDelivery")
                        .HasColumnType("bit");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("OpenHour")
                        .HasColumnType("float");

                    b.HasKey("Id");

                    b.ToTable("Restaurants");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            CloseHour = 20.0,
                            Description = "Dania dla koneserów",
                            HasDelivery = false,
                            Name = "Malinowy Dwór",
                            OpenHour = 6.0
                        },
                        new
                        {
                            Id = 2,
                            CloseHour = 22.0,
                            Description = "Smaczne i tanio",
                            HasDelivery = true,
                            Name = "Bourbon",
                            OpenHour = 7.0
                        },
                        new
                        {
                            Id = 3,
                            CloseHour = 23.0,
                            Description = "Najlepsza pizza w mieście, szybki dojazd",
                            HasDelivery = true,
                            Name = "Pizzeria u Batmana",
                            OpenHour = 11.0
                        });
                });
#pragma warning restore 612, 618
        }
    }
}