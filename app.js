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
			// console.log(ri+'. res: ', res);
			ri++;
		})
		.catch((err)=>{
			// console.log(ri+'. err: ', err);
			ri++;
		});
		if(i>=9) clearInterval(runnerInterval);
	}, 100);
} else {
	winston.warn('config option is not set.');
}
	
	

 
    