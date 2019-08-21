using SalesManager.Models;

namespace SalesManager.Data.Repositories
{
    public interface IUserRepository : IEntityBaseRepository<User>
    {
        bool IsUserNameUniq(string username);
        bool IsEmailUniq(string email);
    }
}
