const express = require('express')
const app = express()

app.set('port', 5001);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`);
});