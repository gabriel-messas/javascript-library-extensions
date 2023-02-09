import { Injectable, ExecutionContext } from '@nestjs/common';
import { IValidatedUser } from 'auth/auth.service';
import { I18nResolver } from 'nestjs-i18n';

@Injectable()
export class UserLangQueryResolver implements I18nResolver {
    constructor() {}

    resolve(context: ExecutionContext) {
        let req: any;
        req = context.switchToHttp().getRequest();

        let lang: string;

        if (req) {
            const user: IValidatedUser = (req as any).user;
            lang = user?.language; 
        }

        return lang;
    }
}
