'use strict';

const User = use('App/Model/User');
const Hash = use('Hash');

class UserController {

  * create(request, response) {
    const users = yield User.all();

    yield response.sendView('user.index', { users: users.toJSON() });
  }

  * store(request, response) {
    //
    const { username, email, password } = request.all();

    try {
      const user = yield User.create({ username, email, password: yield Hash.make(password) });

      yield request.auth.login(user);

      yield request.with({
        success: 'You have successfully registered with ribbeter!',
      }).flash();

      response.redirect('/users');
    } catch (e) {
      yield request
      .withOut('password')
      .andWith({ error: 'That username or email has already been used.' }).flash();

      response.redirect('back');
    }
    response.send(user);
  }

}

module.exports = UserController;
