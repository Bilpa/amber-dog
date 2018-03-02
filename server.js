const express = require('express')
const app = express()
const path = require('path')
// var fs = require('fs')
// var urlArray = '';

app.use(express.static('dist'))



app.listen(3000, () => console.log('App listening on port 3000'))


// fs.readFile('urls.txt', 'utf8', function(err, data) {  
//     if (err) throw err;
    
//     urlArray = data.toString().split("\n");
//     for(i in urlArray) {
//         console.log(urlArray[i]);
        
//     } 

// });

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'))
    
})





