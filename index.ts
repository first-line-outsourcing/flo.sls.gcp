'use strict';

exports.http = (req, res) => {
  res.status(200).send('Hello World!');
};

exports.event = (event, callback) => {
  callback();
};
