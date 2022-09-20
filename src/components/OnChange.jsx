import { useState } from "react";

const OnChange = () => {
  const [text, setText] = useState('')
  return(
    <div>
      <input type="text" onChange={(event) => {
        console.log(event.target.value);
        setText(event.target.value);
      }} />
      <p>{text}</p>
    </div>
  )
};


export default OnChange;