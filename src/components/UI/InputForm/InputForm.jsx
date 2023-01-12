import "./InputForm.css"

export const InputForm = ({id, inputType, labelText, placeholder, value, onChange}) => {
 
 return (
  <div className="container">

   <label className="label-text"
    htmlFor={id}>{labelText} </label>
    
   <input className="input"
   type={inputType} 
   id={id} 
   placeholder={placeholder}
   value={value}
   onChange={onChange}/>

  </div>
 )
}