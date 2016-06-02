var validate = require('./modules/validate.js');

console.log(validate.rgb("rgb(0,0,0)"));

validate.rgb("rgb(0,00,0)")