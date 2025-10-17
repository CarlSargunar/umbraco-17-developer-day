using Umbraco.Cms.Core.Services.Navigation;
using Umbraco.Cms.Infrastructure.HybridCache;

namespace Demo.Web.HybridCache;

public class MySeedKeyProvider : IDocumentSeedKeyProvider
{
    private readonly IDocumentNavigationQueryService _navigationService;

    public MySeedKeyProvider(IDocumentNavigationQueryService navigationService)
    {
        _navigationService = navigationService;
    }
 
    public ISet<Guid> GetSeedKeys()
    {

        // Taken from the Authors node ID
        _navigationService.TryGetDescendantsKeys(new("8b97891b-bb88-4c50-827d-a458c3c2b7bb"), out var keys);

        return new HashSet<Guid>(keys);
    }
}