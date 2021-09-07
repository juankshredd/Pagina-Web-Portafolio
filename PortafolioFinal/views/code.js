const http= require('http');

const server= http.createServer((req, res) => {
    res.status = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

// server.listen(3000, () => {
//     console.log("server on port 3000");
// });


// const express= require('express');
// const app= express();

// app.listen(3000, () => {
//     console.log("server on port 3000");
// });

// app.use(express.json());
// app.get('/user', (req,res)=> {
//     res.json({
//         'Nombre':'Juank',
//         'Apellido': 'Bohorquez'
//     });
// });

// app.post('/user', (req,res)=> {
//     console.log(req.body);
//     res.send('POST REQUEST RECEIVED');
// });

// app.put('/contact', (req,res)=> {
//     res.send('UPDATE REQUEST RECEIVED');
// });

// app.delete('/test', (req,res)=> {
//     res.send('<H1>DELETE REQUEST RECEIVED</H1>');
// });

// app.listen(5000, () => {
//     console.log("server on port 5000");
// });

const express= require('express');
const passport= require('passport');
const cookieParser= require('cookie-parser');
const session= require('express-session');
const passportLocal= require('passport-local').Strategy;
const app= express();

app.use(express.urlencoded({extended:true}));

app.use(cookieParser('Mi Secreto'));

app.use(session({
    secret: 'Mi Secreto',
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.set('view engine', 'ejs');
app.use(passport.session());

passport.use(new passportLocal(function(username,password,done){
    if(username === "Juank" && password === "Juank1")
    return done(null, {id:1, name:"Juank"})

    done(null,false);
}));


passport.serializeUser(function(user,done)){
    done(null,user.id);
}

passport.deserializeUser(function(id,done)){
    done(null,{id:1, name:"Juank"});
}
app.get("/", (req,res)=>{
    // si se inicia sesion muestra
    
    // si no, redirige a login
});



app.get("/login", (req,res)=>{
    // mostrar formulario de login
    res.render("login");
});

app.post("/login", passport.authenticate({
    // recibir credenciales para inicar sesion 
    
}));

app.listen(8080, ()=> console.log("Server Started On Port 8080"));

