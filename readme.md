# To run this project

Use NPM v22 LTS

1. Build the front end

    ```bash
    cd src/Demo.Backoffice/Client
    npm install
    npm run build
    ```

2. Start the back end in a different terminal window

    ```bash
    cd src
    dotnet dev-certs https --trust 
    dotnet run --project Demo.Web
    ```

This example does 2 things
- Add a new dashboard to the backoffice in the content area - "Content -> Example Dashboard"
- Add a new workspace view to the backoffice - "User -> Demo"
- Extend the management API with a new endpoint - implement ManagementApiControllerBase
    - Adds security and authentication to the endpoint
    - Need to use the @umbraco-cms/backoffice/http-client to call the endpoint

## Helpful Links

### HeyAPI

- [HeyAPI Documentation](https://heyapi.io/docs)

A tool to generate an API client from a swagger / OpenAPI spec.


