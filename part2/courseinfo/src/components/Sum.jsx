const Sum = ({parts}) => {
    let sum = 0
    for (var i = 0; i < parts.length ; i++){
        sum += parts[i].exercises
    }
    return (
        <div>
            <b>total of {sum} exercises</b>
        </div>
    )
}

export default Sum