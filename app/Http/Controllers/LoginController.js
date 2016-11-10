'use strict';

class LoginController {


  * create(request, response) {
    //
    yield response.sendView('login.create');
  }

  * store(request, response) {
    //
    const { email, password } = request.all();

    try {
      const validLogin = yield request.auth.attempt(email, password);
      yield request.with({ sucess: 'You are Logged In!' }).flash();

      response.redirect('/users');
    } catch (e) {
      yield request.withOut('password')
      .andWith({ error: 'Sorry, somethings not right.' }).flash();

      response.redirect('back');
    }
  }


}

module.exports = LoginController;
