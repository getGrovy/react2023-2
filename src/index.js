import React from "react";
import ReactDOM from "react-dom/client";



function Hello(props){
  console.log(props)
  return(
    <div>
      <h4>{props.data.name}</h4>
      <h3>{props.data.text}</h3>
      <h2>{props.data.author.name}</h2>
      <h1>{props.data.author.url}</h1>
    </div>
  )
  
}
const dataList = {
  name:"getgrovy",
  text:"hello",
  author :{
    name : "baby",
    url : "naver.com"
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Hello data={dataList} />);