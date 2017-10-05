const express = require('express');
const path = require('path');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5600;

const cookieParser = require('cookie-parser');


const sessionConfig = {
    saveUnitialized: true,
    secret: 'SessionSecret',
    resave: false,
    name: 'session',
    rollin:true,
    cookie: {
        secure: false,
        httpOnly:false,
        maxAge: 3600000,
    }
};


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + '/public/dist')));
app.use(session(sessionConfig));
app.use(cookieParser('adcadvadvnnbfjbsjfb'));

app.use(bodyParser.urlencoded({ extended: true }));


require('./server/config/mongoose.js');

require('./server/config/routes.js')(app);

app.listen(port, () => console.log(`listening on port ${ port}`));