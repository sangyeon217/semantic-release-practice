const express = require('express')
const path = require('path');
const fs = require('fs');

const app = express()

app.set('port', 5001);

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

// 리액트 앱 정적파일 서빙
const buildPath = path.join(__dirname, '../client/build');
if (fs.existsSync(buildPath) && fs.readdirSync(buildPath).length > 0) {
  app.use(express.static(buildPath));
  app.get('/', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
  });
} else {
  res.send('Build in progress...')
}

app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`);
});