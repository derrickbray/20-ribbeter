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
      yield request.with({ success: 'You are Logged In!' }).flash();

      response.redirect('/users');
    } catch (e) {
      yield request.withOut('password')
      .andWith({ error: 'Sorry, Something Went Wrong.' }).flash();

      response.redirect('back');
    }
  }


}

module.exports = LoginController;
