const PersonForm = ({addPerson, newName, newPhone, handleInputChangeN, handleInputChangeP}) => {
    return (
        <div>
            <form onSubmit={addPerson}>
                <div>
                    <div>name: <input value={newName} onChange={handleInputChangeN}/></div>
                    <div>number: <input value={newPhone} onChange={handleInputChangeP} /></div>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default PersonForm