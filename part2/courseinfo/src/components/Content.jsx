import Part from './Part'
import Sum from './Sum'


const Content = ({parts}) => {
    return (
        <div>
            {parts.map((part) => {
                return (
                    <Part key={part.id} part={part}/>
                )
            })}
            <Sum parts={parts}/>
        </div>
    )
}

export default Content