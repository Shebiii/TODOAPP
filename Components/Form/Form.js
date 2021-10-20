import { useDispatch } from "react-redux"
import { TodoAction } from "../../Store/TodoSlice"
import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { useAlert } from "react-alert"

function Form() {
  const alert = useAlert()
  const [value, setValue] = useState("")
  const dispatch = useDispatch()
  const clickHandler = (e) => {
    e.preventDefault()
    let id = uuidv4()
    console.log(id)
    if (value !== "") {
      dispatch(
        TodoAction.addToTodo({
          name: value,
          id,
          done: "false",
        })
      )
      alert.success("added successfully")
    } else {
      alert.error("insert something first")
    }
    setValue("")
  }
  return (
    <div>
      <form>
        <input
          type="text"
          name="name"
          className="question"
          id="nme"
          required
          placeholder="click here to insert into to list"
          autoComplete="off"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <input
          type="submit"
          value="Add to list"
          className="btn btn-primary center"
          onClick={clickHandler}
        />
      </form>
    </div>
  )
}

export default Form
