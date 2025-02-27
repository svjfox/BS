require('dotenv').config();

const port = process.env.PORT || 3001;
const host = 'localhost';
const express = require('express');
const app = express();

const swaggerUI = require('swagger-ui-express');
const yamljs = require('yamljs');
const swaggerDoc = yamljs.load('./docs/swagger.yaml');

const {sunc} = require('./db')



