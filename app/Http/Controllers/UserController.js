'use strict';

const User = use('App/Model/User');
const Hash = use('Hash');

class UserController {

  * create(request, response) {
    //
    yield response.sendView('user.register');
  }

  * store(request, response) {
    //

  }

}

module.exports = UserController;
