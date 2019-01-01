const handler = (err, req, res, next) => {
  console.log({ err })
  res.redirect('/');
};

module.exports = handler;