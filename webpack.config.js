const path = require('path');

module.exports = {
  entry: {
	'addproduct' : './javascript/addproduct.js',
	'dashboard' : './javascript/dashboard.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};