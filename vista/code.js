// const http= require('http');

// const server= http.createServer((req, res) => {
//     res.status = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World');
// });

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
const app= express();

app.set('view engine', 'html');

app.get("/", (req,res)=>{
    // si se inicia sesion muestra
    
    // si no, redirige a login
});



app.get("/login", (req,res)=>{
    // mostrar formulario de login
    res.render("login");
});

app.post("/login", (req, res)=>{
    // recibir credenciales para inicar sesion 
    
});

app.listen(3000, ()=> console.log("Server Started On Port 3000"));

