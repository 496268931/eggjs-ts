import { Application } from 'egg';

export default (app: Application) => {
    app.router.get('/api/systemManager/enterprise/query/queryEnterprise', app.controller.systemManager.enterprise.queryEnterprise);
};