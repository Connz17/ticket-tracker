import "./Form.scss";

const Form = ({formName, formRole, handleNewEmployee}) => {








  return (
        <form className="form">
            <label htmlFor="name">Full Name: </label>
            <input type="text" id="name" placeholder="John Doe"
                onChange={formName}/>
            <label htmlFor="role">Role: </label>
            <input type="text" id="role" placeholder="Junior Software Engineer"
                onChange={formRole}/>
            <button className="btn" onClick={handleNewEmployee}>ADD</button>
        </form>
  )
}

export default Form