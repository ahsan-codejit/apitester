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
		winston.info('runner has been called');
		return request(this.options)
	    .then((body) => {
	       	winston.debug('response body:', (typeof body==='object')?JSON.stringify(body):body);
	       	return body;
	    })
	    .catch((err)=>{
	    	var error = err;
	    	if(err.response&&err.response.body) error = err.response.body;
	    	winston.error('Error: ', (typeof error==='object')?JSON.stringify(error):error);
	    	return error;
	        // POST failed... 
	    });
	}
}