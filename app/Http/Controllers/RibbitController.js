'use strict';

const Ribbit = use('App/Model/Ribbit');

class RibbitController {

  * index(request, response) {
    const ribbits = yield Ribbit.with('author')
      .orderBy('created_at', 'desc')
      .fetch();

    response.send(ribbits);
  }

  * store(request, response) {
    const input = request.only('content');
    input.user_id = request.currentUser.id;
    const ribbit = yield Ribbit.create(input);
    yield ribbit.related('author').load();

    response.send(ribbit);
  }

  * show(request, response) {
    const id = request.param('id');
    const ribbit = yield Ribbit.with('author').where({ id }).firstOrFail();

    response.send(ribbit);
  }

  * update(request, response) {
    const input = request.only('user_id', 'comment', 'post_id');
    const id = request.param('id');

    const ribbit = yield Ribbit.with('author').where({ id }).firstOrFail();
    ribbit.fill(input);
    yield ribbit.save(input);

    response.send(ribbit);
  }

  * destroy(request, response) {
    const id = request.param('id');
    const ribbit = yield Ribbit.query().where({ id }).firstOrFail();
    yield ribbit.delete();

    response.status(204).send();
  }

}

module.exports = RibbitController;
