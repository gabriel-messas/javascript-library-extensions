# Javascript Library Extensions
Extensions to JavaScript npm libraries

---

### ngb-date-moment-parser-formatter
Parser and formatter for NgbDate using Moment.js written in TypeScript

- ***Moment library must have already been properly initialized in a higher section of the code***. Example:
```
import * as moment from 'moment';
moment.locale('en');
```
---

### nestjs-i18n-req-user-lang-resolver
Resolver for nestjs-i18n that uses the request 'user' property 'language'

- ***I18nModule has to be provided with resolvers now***. Example:
```
I18nModule.forRoot({
    ...,
    resolvers: [
        UserLangQueryResolver,
        ...
    ],
}),
```

---

### mat-paginator-i18n-service.ts
Internationalization service with ngx-translate for mat-paginator component

- ***ngx-translate must have already been set up and initialized in the project***. Example:
```
{
    provide: APP_INITIALIZER,
    useFactory: appInitializerFactory,
    deps: [ TranslateService ],
    multi: true
},
```

---
