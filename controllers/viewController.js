module.exports = {
  showChatroom(req, res) {
    res.render('chatroom');
  },
  show404(err, req, res, next) {
    res.sendStatus(404);
  },
  show406(err, req, res, next) {
    res.sendStatus(406);
  },
  // showAccts(req, res) {
  //   res.render('CRUD/acct-index', {
  //     data: res.locals.accts,
  //   });
  // },
  // showOne(req, res) {
  //   res.render('CRUD/acct-single', {
  //     data: res.locals.acct,
  //   });
  // },
  // showAddForm(req, res) {
  //   res.render('CRUD/acct-add');
  // },
  // showEditForm(req, res) {
  //   res.render('CRUD/acct-edit', {
  //     data: res.locals.acct,
  //   });
  // },
  // handleCreate(req, res) {
  //   res.redirect('/app');
  // },
  // handleUpdate(req, res) {
  //   /* need to update the body so it has an ID */
  //   res.redirect(`/app/${req.params.id}`);
  // },
  // handleDelete(req, res) {
  //   res.redirect('/app');
  // },
};
