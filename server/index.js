const express = require('express');
const app = express();

app.get('/' , (req , res) => {
	res.send("<h1>My Jeevan Kundli</h1>");
});

app.listen(4000 , () => {
	console.log("Server running on port 4000");
});