const sg = require('@sendgrid/mail');
const sgConfig = require('../emails/sendgrid');
const pug = require('pug');

exports.send = async (options) => {
  Object.assign(sg.message, {
      to: options.email,
      subject: options.subject,
      html: render(options.view, options.data)
  });

  return await sg.send(sgConfig.message);
};

function render(filename, data) {
    return pug.renderFile(`${__dirname}/../views/emails/${filename}.pug`, data);
}
