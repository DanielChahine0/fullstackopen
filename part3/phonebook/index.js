// ============== IMPORTS ==============
const express = require('express')
const app = express()

app.use(express.json())

// ============== ROUTES ==============
app.get('/api/persons', (request, response) => {
    response.send("HI")
})

// ============== START THE SERVER ==============
const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})