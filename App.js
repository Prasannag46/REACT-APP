import React,{useEffect,useState} from 'react'
const App = () =>{
  const [data,setData] = useState([]);
useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/todos').then(
    response => response.json()

  ).then(json => setData(json))

},[])
  return(
    <div>
      <h1> Hello Everyone, This is my First React app!!</h1>
      <h1> This is my Fetched data from an API</h1>
       {data.map(item => <li key={item.id}>{item.title}</li>)}
    </div>
  )
}

export default App