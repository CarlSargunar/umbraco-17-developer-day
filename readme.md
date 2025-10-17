# Migration Demo

- uSync Migrations 
    - takes old types, and custom converters to new types
    - Change the uSync files output
    - Can be used to migrate to a brand new site OR an in-place migration where you migrate to the same instance after upgrading
        - In-place migration will change the doc type within the same site
    - Select the v9 folder, not the root uSync folder
    - Choose a migration plan
        - nested content to block list will change the underlying type
        - Can see the diff from the old to the new type.
    - Run the migration : Settings first, then content

Umbraco Flavoured Markdown Ref : https://docs.umbraco.com/umbraco-cms/reference/umbraco-flavored-markdown
 - Full list of filters

## Steps

1. in the src/Demo.Web folder run
```
dotnet run
```

2. In this demo, install umbraco and go through the setup
    - Do a uSync Export Everything
    - uSync Migrations -> Select Source (uSync/v9) -> Select Migration Plan (Nested Content to Block List) -> Run Migration
    - Import Settings first
        - Check doc types have changed
    - Go back, select existing migration and import Content

3. Upgrade site to 17

![alt text](image-1.png)

![alt text](image-2.png)


![alt text](image.png)