const cookieSession = require('cookie-session');
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const app = express();

console.log("ser runner listening on");

app.use(cookieSession(
    {
        name:"session",
        keys:["lama"],
        maxAge:24 * 60 * 60 * 100
    }

))

app.use(passport.initialize());
app.use(passport.session());

app.use(
    cors({
        origin: 'https://localhost:3000',
        methods: "GET , POST , PUT , DELETE ",
        credentials : true
    })
);

app.listen("5000", () => {
    console.log("ser runner listening on");
})

