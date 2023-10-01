using System.Security.Cryptography.X509Certificates;

namespace ArkadiuszSchabowski_Milionerzy_ProjectMVC.Models
{
    public class Game
    {
        public static int startMoney = 0;
        public bool isPhone = true;
        public bool isAudience = true;
        public  bool isFiftyFifty = true;

        public void StartGame()
        {
            startMoney = 0;
            SetLifelines(isPhone, isAudience, isFiftyFifty);
        }
        public void SetLifelines(bool phone, bool audience, bool fiftyFifty)
        {

        }
    }
}
