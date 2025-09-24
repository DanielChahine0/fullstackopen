const Notification = ({ message, good }) => {
  if (message === null) {
    return null
  }

  return (
    <div className={good ? 'message' : 'warning'}>
      <div className='notification'>
        {message}
      </div>
    </div>
    
  )
}

export default Notification