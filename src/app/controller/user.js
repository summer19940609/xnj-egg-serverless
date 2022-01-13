'use strict'

const { Controller } = require('egg')
const { sleep } = require('../utils/index')

class UserController extends Controller {
  async find() {
    const { ctx } = this
    const userName = ctx.query.userName;
    const user = await ctx.service.user.find(userName);
    ctx.body = user;
  }
}

module.exports = UserController
