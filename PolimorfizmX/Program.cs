using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PolimorfizmX
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Shape shape = new Shape();
            Rectangle rectangle = new Rectangle();
            Circle circle = new Circle();

            shape.Draw();
            rectangle.Draw();
            circle.Draw();



            Shape shapeRectangle = new Rectangle();

            Shape[] shapes = new Shape[2];
            shapes[0] = rectangle;
            shapes[1] = circle;

            Console.WriteLine();

            foreach (Shape item in shapes)
            {
                item.Draw();
            }
            Console.ReadKey();

        }
    }
    class Shape
    {
        public virtual void Draw()
        {
            Console.WriteLine("Shape");
        }
    }
    class Rectangle : Shape
    {
        public override void Draw()
        {
            Console.WriteLine("Rectangle");
        }
    }
    class Circle : Shape
    {
        public override void Draw()
        {
            Console.WriteLine("Circle");
        }
    }
}
