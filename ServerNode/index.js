const express = require('express');
const volleyball = require('volleyball');
const cors = require('cors');
var path = require("path");

require('dotenv').config();

const app = express();

const middleware = require('./auth/middlewares');
const auth = require('./auth');

const web_users = require('./apiMysql/website/users');
const web_kakaoa = require('./apiMysql/website/kakaoa');

const web_contact = require('./apiMysql/website/contact');
const web_tentang = require('./apiMysql/website/tentang');
const web_informasi = require('./apiMysql/website/informasi');
// const web_home = require('./apiMysql/website/profile/home');


const publish_proposal = require('./apiMysql/publish/proposal');
const publish_pengumuman = require('./apiMysql/publish/pengumuman');
const publish_peraturan = require('./apiMysql/publish/peraturan');
const publish_tentang = require('./apiMysql/publish/tentang');
const publish_contact = require('./apiMysql/publish/contact');
const publish_informasi = require('./apiMysql/publish/informasi');

app.use(volleyball);

app.use(cors({
  // origin : 'http://localhost:8081'
  origin : '*'
}));
app.use(express.json());

app.use(middleware.checkTokenSeetUser);

app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨Hello World! 🌈✨🦄',
    user : req.user
  });
});

app.use('/auth', auth);
app.use('/uploads', express.static(path.join(__dirname, './uploads')))

app.use('/api/v1/web_users', middleware.isLoggedIn, web_users);
app.use('/api/v1/web_kakaoa', middleware.isLoggedIn, web_kakaoa);
app.use('/api/v1/web_contact', middleware.isLoggedIn, web_contact);
// app.use('/api/v1/web_home', middleware.isLoggedIn, web_home);
app.use('/api/v1/web_tentang', middleware.isLoggedIn, web_tentang);
app.use('/api/v1/web_informasi', middleware.isLoggedIn, web_informasi);


app.use('/api/v1/publish_proposal', publish_proposal);
app.use('/api/v1/publish_pengumuman', publish_pengumuman);
app.use('/api/v1/publish_peraturan', publish_peraturan);
app.use('/api/v1/publish_contact', publish_contact);
app.use('/api/v1/publish_tentang', publish_tentang);
app.use('/api/v1/publish_informasi', publish_informasi);


function notFound(req, res, next) {
  res.status(404);
  const error = new Error('Not Found data - ' + req.originalUrl);
  next(error);
}

function errorHandler(err, req, res, next) {
  res.status(res.statusCode || 500);
  res.json({
    message: err.message,
    stack: err.stack
  });
}

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5100;
const server = app.listen(port, () => {
  console.log('Listening on port', port);
});

// HAPUS
// const io = require('socket.io')(server);

// io.on('connection', function(socket) {
//   console.log(socket.id);
//   socket.on('SEND_MESSAGE', function(data) {
//       note.find().then(notes => {
//           io.emit('MESSAGE', notes)
//       });
//   });

// });

// HAPUS

