const express = require('express');
const path = require('path');
const app = express();
const puppeteer = require('puppeteer');
const expressLayouts = require('express-ejs-layouts');
const db = require("./config/mongoose");
const port = 8000;

app.use(express.static('./assets'));
//layout must be above route part
app.use(expressLayouts);
//Extracting style and script from subpages into layouts
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//EXPRESS router:
app.use('/',require('./routes'));

app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

app.listen(port , function(err){
	if(err){
		console.log(`Error in running server: ${err}`);
	}
	console.log(`Server is running on port: ${port}`);
});