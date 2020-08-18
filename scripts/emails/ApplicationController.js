const Application = require('application');
const appMailer = require('website/scripts/emails/appMailer');

exports.store = async (req, res, next) => {
  const  application = {
      'name': req.body.name,
      'email': req.body.email.toLowerCase(),
      'message': req.body.message
  };

  await Application.create(application);

  appMailer.applicationNotify({
      email:application.email,
      data: { name: application.name }
  });

  req.flash('form', req.body.first_name + ', Hello!');
  res.redirect('/');
};

const http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(8080);

