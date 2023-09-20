import React from 'react'

export default function Alert(props) {
 const capitalize = (word)=>{
  return word.charAt(0).toUpperCase() + word.slice(1);
 }

  return (
      props.alert && <div className={`alert alert-${props.alert.newType} alert-dismissible fade show`} role="alert">
       <strong>{capitalize(props.alert.newType)}</strong>: {props.alert.newMessage}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
  )
}
