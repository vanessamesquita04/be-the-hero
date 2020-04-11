const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors()); // em desenvolvimento usa assim
// app.use(cors({
//     origin : 'http://meuapp.com'
// })); em produção coloca o domínio de onde vai ta hospedado, isso serve para permitir que somente aquele 
//domínio acesse o backend
app.use(express.json());
app.use(routes);

app.listen(3333); 