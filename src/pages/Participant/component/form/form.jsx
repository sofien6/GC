import React from 'react'
import './form.css'
const Form = (args) => {
    return (
        <div>
  <form className='form needs-validation'>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <button type="submit" onClick={args.onSubmitEmail} className="btn btn-primary">Submit</button>
</form>
       </div>
    )
}

export default Form
