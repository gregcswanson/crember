var gravatar = require('gravatar');
/*
 * GET home page.
 */

exports.index = function(req, res){
	var url = gravatar.url('gregcswanson@gmail.com', {s: '200', r: 'pg', d: '404'});
  	res.render('app', { title: 'CrEmber', gravatar: url });
};