using System;

class Program
{
    static void Main(string[] args)
    {
        int cases = int.Parse(Console.ReadLine());

        for (int i = 0; i < cases; i++)
        {
            string input = Console.ReadLine();
            string output = DecryptExpression(input);
            Console.WriteLine(output);
        }
    }

    static string DecryptExpression(string input)
    {
        int openBrackets = 0;
        int closeBrackets = 0;
        string output = "";

        foreach (char c in input)
        {
            if (c == '|')
            {
                if (openBrackets == closeBrackets)
                {
                    output += "(";
                    openBrackets++;
                }
                else
                {
                    output += ")";
                    closeBrackets++;
                }
            }
            else
            {
                output += c;
            }
        }

        while (openBrackets > closeBrackets)
        {
            output += ")";
            closeBrackets++;
        }

        return output;
    }
}
