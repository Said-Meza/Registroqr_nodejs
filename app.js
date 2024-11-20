import express  from 'express'
import path, { dirname } from 'path';
import { fileURLToPath } from "url"
// import controllerCountries from './controllers/CountriesController.js'
import ErrorCon from './controllers/ErrorController.js'
import cRegistro from './controllers/cRegistro.js';

const app= express()
const port =3000

const __dirname = fileURLToPath(new URL(".", import.meta.url));


//set de path files
app.set('views', path.join(__dirname,"views"))
//set de type of template
app.set('view engine','ejs')

app.use(express.json())
app.use(express.urlencoded({extended:true}));

//set listen file on folder public
app.use(express.static(path.join(__dirname,"public")))
app.use(express.static(path.join(__dirname,"js")))

//rutas 
app.get('/',cRegistro.getIndex)
app.get('/registro',cRegistro.getForm)
app.post('/registro',cRegistro.create)


app.use(ErrorCon.error404);

app.listen(port,'0.0.0.0', () => {
    console.log(`http://localhost:${port}/`);
});

