const Welcome = ({getData}) => {
  return (
    <div>
        {
            getData.map( (e,i) => {
                return <h1 key={i}>Welcome {e.username} </h1>
            })
        }
    </div>
  )
}

export default Welcome
