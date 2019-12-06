import { Context } from 'egg';

//不需要jwtToken的路由
const jwtFilterRoutes = [
    /^\/$/,
    // /^\/api/,
    /^\/api\/login/,
    /^\/api\/lexicon/,
    // /^\/abc/,
    // /^((?!\/api).)*$/
]

// 需要jwt不需要校验权限的路由
const jwtUnauthRoutes = [
    /^\/api\/jwtUnauth/,
]
export default () => async (ctx: Context, next: () => Promise<any>) => {
    // console.log(ctx.url)                //      /user/getUsers?limit=1
    // console.log(ctx.originalUrl)        //      /user/getUsers?limit=1
    // console.log(ctx.origin)             //      http://localhost:8888
    // console.log(ctx.path)               //      /user/getUsers
    // console.log(ctx.href)               //      http://localhost:8888/user/getUsers?limit=1
    let filter = jwtFilterRoutes.some(one => {
        return (new RegExp(one)).test(ctx.path)
    })
    //filter为false则表示当前路由需要jwt
    if (!filter) {
        const { authorization = '' } = ctx.request.header;
        const token = authorization.replace('Bearer ', '');
        const secret = ctx.app.config.jwt.secret
        console.log(secret)
        console.log(ctx.app.jwt.sign({ "a": 798 }, secret))
        try {
            const jwtInfo = ctx.app.jwt.verify(token, secret);
            console.log(jwtInfo)
            ctx.state.jwtInfo = jwtInfo;
        } catch (err) {
            ctx.throw(401, err.message);
        }
        //判断是否需要校验权限
        let jwtUnauth = jwtUnauthRoutes.some(one => {
            return (new RegExp(one)).test(ctx.path)
        })
        if (jwtUnauth) {
            return next()
        } else {
            // let token = ctx.state.jwtInfo
            // if (!token.citationstatus) return ctx.throw(401, "账号异常")
            // if (token.accounttype === "admin") return next()
            // let currentUrl = ctx.path.split("/")


            // let roleids = token.roleids.join(",")
            // let ctx_bank = ctx
            // ctx_bank.query.id = roleids
            // let roleInfo = await queryRole(ctx)
            // let roleInfo = {}
            // if (roleInfo["code"] === 1 && roleInfo["data"].length > 1) {
            //     let role = roleInfo.data.map(one => JSON.parse(one.roleauth))
            //     let arr = []
            //     for (let i of role) {
            //         for (let j of i) {
            //             for (let k of j.children) {
            //                 for (let l of k.children) {
            //                     arr.push(l)
            //                 }
            //             }
            //         }
            //     }
            //     let auth = arr.filter(one => ctx.path.indexOf(one.route) === 0)
            //     let auth1 = auth.some(one => one.is_used)
            //     console.log(auth1)
            //     if (auth1) return next()

            // }
            // return ctx.fail("没有权限")
        }
    }
    await next()
}