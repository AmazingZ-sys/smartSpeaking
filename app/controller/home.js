class HomeController extends Controller {
  async send() {
    const { ctx, app } = this;
    ctx.body = app.config;
    const result = await ctx.service.sendmsg.sendOut();
    ctx.logger.info('主动触发，发送模板消息 结果: %j', result);
    ctx.body = result;
    ctx.set('Content-Type', 'application/json');
  }
}
