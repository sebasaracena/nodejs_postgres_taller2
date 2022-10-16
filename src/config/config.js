const dotenv = require('dotenv');
const result = dotenv.config();

if (process.env.AMBIENTE && process.env.AMBIENTE.trim() == 'pro') {
    console.log('PRODUCCION');
    process.env.urlPostgres = `localhost`;
}