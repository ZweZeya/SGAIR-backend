const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 4000;

// Middleware
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))

// Routes
app.route('/psi')
    .get((req, res) => {
        const today = new Date()
        //const url = "https://api.data.gov.sg/v1/environment/psi?date=" + today.toISOString().slice(0, 10);
        axios.get("https://api.data.gov.sg/v1/environment/psi")
        .then(response => {
            if (response.status === 200) {
                res.send(JSON.stringify(response.data));
            } else {
                res.send("Failed to get data");
            };
        })
        .catch(err => console.log(err.message));
    })


app.listen(port, () => {
    console.log("Server has started on port " + port);
})