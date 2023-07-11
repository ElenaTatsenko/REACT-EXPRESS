const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
    console.log(`Server running on a port ${PORT}`)
})

app.get('/api', (req, res) => {
res.json({
    message: 'This is the response from the backend'
})
})