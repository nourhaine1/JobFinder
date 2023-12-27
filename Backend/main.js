
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 3800;

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
// bodyParser pour récupérer les données avec post/put
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// pour utiliser les routes de job
const job_routes = require('./routers/JobRouter.js');
app.use('/api/jobs', job_routes);



// pour utiliser les routes de company
const company_routes = require('./routers/CompanyRouter.js');
app.use('/api/companys', company_routes);

// pour utiliser les routes de application
const application_routes = require('./routers/ApplicationRouter.js');
app.use('/api/applications', application_routes);
// pour utiliser les routes de user

const user_routers = require('./routers/userRouter');
app.use('/api/users',user_routers );

// méthode pour se connecter à la base de données avec un fichier env
require('dotenv').config();
mongoose.connect(process.env.MONGO_URI)
    .then(() => app.listen(port, () => console.log(`server running on port ${port}`)))
    .catch((error) => console.log('Error', error));



