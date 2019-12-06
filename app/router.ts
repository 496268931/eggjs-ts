import { Application } from 'egg';
// import { initRouter } from 'egg-cool-router';
import enterprise from './route/systemManager/enterprise'
export default (app: Application) => {
    // initRouter(app);
    enterprise(app);
};
