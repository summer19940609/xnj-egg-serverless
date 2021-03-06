// app/service/user.js
const Service = require('egg').Service;

class UserService extends Service {
  async find(userName) {
    const user = await this.app.mysql.get('users', { user_name: userName });
    return { user };
  }
}

module.exports = UserService;
