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


## Helpful LInks

### HeyAPI

- [HeyAPI Documentation](https://heyapi.io/docs)

A tool to generate an API client from a swagger / OpenAPI spec.