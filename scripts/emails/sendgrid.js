
const sg = require('@sendgrid/mail');

sg.setApiKey('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');

const message = {};

message.from = 'majsonlbn@gmail.com';
message.mail_settings = {
  sandbox_mode: {
      enable: true
  }
};

exports.message = message;