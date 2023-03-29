const express = require('express');
const app = express();
let port = 3003;
app.use(express.json());
app.get('/stt', (req, res) => {
  res.send({"message":"Hello world from Kubernetese...."});
});

app.listen(port, () => {
  console.log(`vCash app1 listening on port ${port}`)
})
