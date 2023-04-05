const express = require('express');
const app = express();
let port = 3003;
app.use(express.json());
app.get('/stt', (req, res) => {
  res.send({"message":"Hello world from Kubernetese...."});
  var currentdate = new Date(); 
  var datetime ="[" + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds() + ":"
                + currentdate.getMilliseconds() + "]";
  console.log(`${datetime} vCash app1 was called on port ${port}`);
});

app.listen(port, () => {
  console.log(`vCash app1 listening on port ${port}`)
})
