
import { Controller } from 'egg';

export default class NewsController extends Controller {
    public async queryEnterprise() {
        const { ctx } = this;
        // console.log(ctx)
        // const token = app.jwt.sign({ foo: 'bar' }, app.config.jwt.secret);
        console.log(1);
        const userInfo = await ctx.service.seedo.find();
        ctx.body = userInfo;
    }

}
