// app/extend/context.js
module.exports = {
    success(data = '操作成功', status = 200) {
        // this 就是 ctx 对象，在其中可以调用 ctx 上的其他方法，或访问属性
        this.body = {
            code: 1,
            info: '操作成功',
            data
        }
        this.status = status
        return this
    },
    fail(errorInfo = '', status = 200) {
        // this 就是 ctx 对象，在其中可以调用 ctx 
        this.body = {
            code: 0,
            info: "操作失败，请重试",
            errorInfo
        }
        this.status = status
        return this
    },
};