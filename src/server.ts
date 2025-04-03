import App from './app';
import {
    IndexRoute,
    UserRoute,
    ProductRoute,
    AuthRoute
} from './core/routes';
import { validateEnv } from './core/utils/validateEnv';

validateEnv();

const app = new App([
    new UserRoute(),
    new AuthRoute(),
    new ProductRoute(),
    new IndexRoute()
]);

app.listen();