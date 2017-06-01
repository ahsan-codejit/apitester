var request = require('request-promise-native');
require('request-debug')(request);
module.exports = class Tester {
	constructor (options){
		this.options = options;
	}
	setUri(uri){
		this.options.uri = uri;
	}
	run(){
		request(this.options)
	    .then((body) => {
	    	console.log('then block');
	       	console.log(body);
	    })
	    .catch((err)=>{
	    	console.log('catch block');
	    	var error = err;
	    	if(err.response&&err.response.body) error = err.response.body;
	    	console.log('Error: ', err.response.body);
	        // POST failed... 
	    });
	}
}