namespace DI.Services
{
    public interface IEmailSender
    {
        void SendEmail(string email);
    }
    public class EMailSenderService : IEmailSender
    {
        public void SendEmail(string email)
        {
            //TODO
        }
    }
}
