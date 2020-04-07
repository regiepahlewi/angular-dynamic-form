import { environment } from '../../environments/environment';

export class WebAddressConstant {

    // API CONFIG
    static API_CONFIG = WebAddressConstant.getUrl();

    // REGISTRATION
    static REGISTRATION_SAVE = WebAddressConstant.API_CONFIG + 'registration';

    static getUrl() {
        const res = (environment.production) ? 'http://localhost:3000/' : '';
        return res;
    }
}
