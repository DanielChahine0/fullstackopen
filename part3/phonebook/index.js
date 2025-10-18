// ============== IMPORTS ==============
const express = require('express')
const app = express()

app.use(express.json())

// ============== DATA ==============
const persons = [
    {
        id: "1",
        name: "Arto Hellas", 
        number: "040-123456"
    },
    {
        id: "2",
        name: "Ada Lovelace", 
        number: "39-44-5323523"
    },
    {
        id: "3",
        name: "Dan Abramov", 
        number: "12-43-234345"
    },
    {
        id: "4",
        name: "Mary Poppendieck", 
        number: "39-23-6423122"
    }
]

// ============== ROUTES ==============
app.get('/info', (request, response) => {
    const d = new Date();
    response.send(
        `<p>Phonebook has infro for ${persons.length} people</p>` + 
        `<p>${d}</p>`
    )
})

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = request.params.id;
    person = persons.find(n => (n.id === id))
    if (person){
        response.json(person)
    }
    else{
        response.status(404).end()
    }
})

// ============== START THE SERVER ==============
const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})