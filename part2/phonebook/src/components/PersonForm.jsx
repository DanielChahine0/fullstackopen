const PersonForm = ({addPerson, newName, newNumber, handleInputChangeN, handleInputChangeP}) => {
    return (
        <div>
            <form onSubmit={addPerson}>
                <div>
                    <div>name: <input value={newName} onChange={handleInputChangeN}/></div>
                    <div>number: <input value={newNumber} onChange={handleInputChangeP} /></div>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default PersonForm