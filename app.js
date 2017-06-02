var Tester = require('./tester.js');
var config = require('./config.js');
const winston = require('winston')
var options = config[process.env.NODE_ENV || 'test'];
if(options) {
	var testerObj = new Tester(options);
	var i =1;
	var runnerInterval = setInterval(function(){
		winston.info(i++, '. Calling....')
		testerObj.run();
	}, 100);
	setTimeout(function(){
		clearInterval(runnerInterval);
	},1000);
} else {
	winston.warn('config option is not set.');
}
	
	

 
    