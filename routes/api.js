var gravatar = require('gravatar');
/*
 * api listing.
 */

exports.profile = function(req, res){
	var url = gravatar.url('gregcswanson@live.com', {s: '45', r: 'pg', d: 'retro'});
  	res.send({"profile": {
  		"email": "gregcswanson@gmail.com",
  		"gravatar": url}
  	});
};