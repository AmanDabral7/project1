import React , {useState} from 'react';


export default function TextForms(props) {

  const[text , setText] = useState("Enter Text Here");

 const toUpper=()=>{
console.log("clicked");
let newText = text.toUpperCase();
setText(newText);
 }

const toLower=()=>{
  let newText2 = text.toLowerCase();
  setText(newText2);
}

const onClear=()=>{
 let newText3=' ';
 setText(newText3);

}

 const handleOnChange=(event)=>{
setText(event.target.value);              // it allows us to add the text...
 }


  return (
    <div>
      <div className="mb-3">
      <h1>{props.heading}</h1>
        <textarea class="form-control" value = {text} id="exampleFormControlTextarea1" rows="8" onChange={handleOnChange}></textarea>
      </div>
      <button type="button" class="btn btn-outline-info" onClick={toUpper}>UPPERCASE</button>
      <button type="button" class="btn btn-outline-danger mx-3" onClick={toLower}>LOWERCASE</button>
      <button type="button" class="btn btn-outline-secondary" onClick={onClear}>Clear</button>
    </div>
  )
}
