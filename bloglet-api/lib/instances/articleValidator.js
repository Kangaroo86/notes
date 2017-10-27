const Yup = require('yup');

const Validator = require('../validators/Validator');

const { DEBUG } = require('../../env');

const schemas = {
  forCreate: {
    title: Yup.string()
      .trim()
      .required()
      .min(2),
    description: Yup.string().trim(),
    content: Yup.string()
      .trim()
      .required()
      .min(2)
  },
  forUpdate: {
    title: Yup.string()
      .trim()
      .min(2),
    description: Yup.string().trim(),
    content: Yup.string()
      .trim()
      .min(2)
  }
};

module.exports = new Validator({
  name: 'Article',
  schemas,
  logError: DEBUG ? console.error : undefined // eslint-disable-line no-console
});
