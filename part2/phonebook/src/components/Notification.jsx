const Notification = ({ message, good }) => {
  if (message === null) {
    return null
  }

  return (
    <div className="notification">
      <div className={good ? 'message' : 'warning'}>
          {message}
        </div>
    </div>
    
  )
}

export default Notification