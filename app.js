var Tester = require('./tester.js');
var config = require('./config.js');
const winston = require('winston')
var options = config[process.env.NODE_ENV || 'test'];
if(options) {
	var testerObj = new Tester(options);
	var i =1, ri =1;
	var runnerInterval = setInterval(function(){
		
		winston.info(i++, '. Calling....')
		testerObj.run()
		.then((res)=>{
			console.log(i+'. res: ', res);
			ri++;
			if(ri>=8) clearInterval(waitingInterval);
		})
		.catch((err)=>{
			console.log('err: ', err);
			ri++;
			if(ri>=8) clearInterval(waitingInterval);
		});
		if(i>=9) clearInterval(runnerInterval);
		// var waitingInterval = setInterval(function(){
		// 	console.log('Waiting.......');
		// }, 1000);
		// .then((result)=>{
		// 	winston.debug('success');
		// 	if(ri++ >= 8) clearInterval(runnerInterval);
		// 	return result;
		// });
	}, 100);
	// setTimeout(function(){
	// 	winston.info('Interval is being closed');
	// 	clearInterval(runnerInterval);
	// },1000);
} else {
	winston.warn('config option is not set.');
}
	
	

 
    