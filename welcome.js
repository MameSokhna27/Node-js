var fs = require('fs');
fs.writeFile('./welcome.txt', "Hello Node", (err, data)=>{
  if (err) {
    console.error(err);
  }else{
    fs.readFile('./welcome.txt', "ascii",  (err, data)=>{
        if (err){
            console.error(err)
        }else{
            console.log(data)
        }
    });
    }
})

