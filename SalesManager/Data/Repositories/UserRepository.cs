using SalesManager.Models;

namespace SalesManager.Data.Repositories
{
    public class UserRepository : EntityBaseRepository<User>, IUserRepository
    {
        public UserRepository(SalesManagerDbContext context)
              : base(context)
        {

        }

        public bool IsEmailUniq(string email)
        {
            var user = this.GetSingle(u => u.Email == email);
            return user == null;
        }

        public bool IsUserNameUniq(string username)
        {
            var user = this.GetSingle(u => u.Username == username);
            return user == null;
        }
    }

}
