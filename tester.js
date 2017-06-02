var request = require('request-promise-native');
//require('request-debug')(request);
const winston = require('winston')
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
	       	winston.debug('response body:', body)
	    })
	    .catch((err)=>{
	    	var error = err;
	    	if(err.response&&err.response.body) error = err.response.body;
	    	winston.error('Error: ', error);
	        // POST failed... 
	    });
	}
}