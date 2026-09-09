const Sum = ({parts}) => {
    const sum = parts.reduce((accumulator, item)=> accumulator + item.exercises, 0)
    return (
        <div>
            <b>total of {sum} exercises</b>
        </div>
    )
}

export default Sum