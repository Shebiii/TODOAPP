import React from "react"
import { useDispatch } from "react-redux"
import { TodoAction } from "../../../Store/TodoSlice"

function TableBody(props) {
  const dispatch = useDispatch()
  return (
    <>
      {props.data.map((post) => (
        <tr
          key={post.id}
          onClick={() => dispatch(TodoAction.completed(post.id))}
        >
          <td
            className={
              post.done === false
                ? "text-center text-decoration-line-through bg-danger text-white"
                : "text-center "
            }
          >
            {post.name}
          </td>
        </tr>
      ))}
    </>
  )
}

export default TableBody
