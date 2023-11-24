const express=require ("express");
const app = express ();
const path = require("path");

const port = process.env.PORT||3030;
app.listen(port, () => 
console.log (`Servidor corriendo en el puerto http://localhost:${port}`)
);

// debo escribir lo que el servidor debe responder cuando le llega una peticion o req

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname,"./views/index.html"))
});


app.get("/register", (req,res) => {
    let htmlPath = path.join(__dirname,"./views/register.html");
    res.sendFile(htmlPath)
})
app.get("/login", (req,res) => {
    let htmlPath = path.join(__dirname,"./views/login.html");
    res.sendFile(htmlPath)
});
app.post("/login", (req,res) => {
    let htmlPath = path.join(__dirname,"./views/index.html"); /* hace que el button enviar del login me lleve a la pagina ppal o index */
    res.sendFile(htmlPath)
});

app.use(express.static("public"));