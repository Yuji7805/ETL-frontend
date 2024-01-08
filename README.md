# redznake-app
[default]
aws_access_key_id=AKIATYG34CEM2BFHNFGX
aws_secret_access_key=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

[amplify-dev]
aws_access_key_id=AKIATYG34CEMYPPRS45A
aws_secret_access_key=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

To add a new side menu entry -> app.menu.component.ts

To add a new route -> app-routing.module.ts

ng generate service <service-name>

ng generate component path/<component-name> --skip-import
If the import is not done automatically, add the component to app.module.ts

App name
index.html
app.footer.component.ts
app.menu.component.html



#Start amplify
amplify init

#Add custom backend from AppSync
amplify add codegen --apiId 63cqvvlntfgopeoqwsm7u7bcuy

#Update backend project if the AppSync backend is modified manually
amplify codegen

#Add existing auth Cognito
amplify import auth


#syncfusion license key
Ngo9BigBOggjHTQxAR8/V1NAaF5cWWJCf0x0R3xbf1x0ZFxMYVxbRH5PMyBoS35RdURhW3xeeXVVRmlVVUV/