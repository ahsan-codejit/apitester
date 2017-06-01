
//require('./customlogger.js')();

var Tester = require('./tester.js');
var options = {
    method: 'POST',
    uri: 'https://apidev.omnea.org/v2/submissions/347616',
    json: true, // Automatically stringifies the body to JSON 
    headers:{
        apiKey: '46LOGVr3v6fDWYH23Ciz'
    }
};
var testerObj = new Tester(options);
for(let i=0; i<10; i++){
    testerObj.run();
}


 
    