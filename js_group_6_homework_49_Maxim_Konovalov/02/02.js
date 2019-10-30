var message = process.argv[2]

var figlet = require('figlet');

figlet.text(message, function (error, data){
  if(error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

