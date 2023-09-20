import React, {useState} from 'react' // Don't forget to import useState


export default function TextForm(props) {
    

    const handleOnClick = () =>{
        console.log("You have clicked the button" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase", "success");
    }
    const handleOnClick2 = () =>{
        console.log("You have clicked the button" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase", "success");
    }
    const handleOnClick3 = () =>{
        console.log("You have clicked the button" + text);
        let newText = "";
        setText(newText)
        props.showAlert("Text Cleared", "success");
    }
    

    const handleOnChange = (event) =>{
        console.log("You have changed");
        setText(event.target.value) //Now jo user type karega wo add hote jaayega
    }
    const [text, setText] = useState( ''); // inside the function component

  return(
    <>
    <div className={`container`} style={{backgroundColor:props.mode==='dark'? '#272742' : 'white' }}>
          <h4 className="mt-3 pt-3">{props.heading}</h4>
          <div className="mb-3">
               <textarea className={`form-control border border-secondary mt-3`} value={text} style={{color: props.mode === 'light'? 'black' : 'white', backgroundColor: props.mode==='dark'? 'black': 'white'}} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
           </div>
              <button class="btn btn-success mx-2 my-2" type="button" onClick={handleOnClick}>Convert to UpperCase</button>
              <button class="btn btn-success mx-2 my-2" type="button" onClick={handleOnClick2}>Convert to LowerCase</button>
              <button class="btn btn-success mx-2 my-2" type="button" onClick={handleOnClick3}>Clear Text</button>
              
   </div>
   <div className="container my-4">
    <h3>Your text summary</h3>
    <p>{text.split(" ").length} words and  {text.length} characters</p>
    <p> {0.008 * text.split(" ").length} Minutes to Read</p>
    <h3>Preview</h3>
    <p>{text.length >0? text : "Enter something in the box to preview it here"}</p>
   </div>
    </>
  )
}
