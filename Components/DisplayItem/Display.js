import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { TodoAction } from "../../Store/TodoSlice"
import TableBody from "../UI/Table/TableBody"
function Display() {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.todo.list)
  const clearHandler = (e) => {
    e.preventDefault()
    const istrue = confirm("are you sure you want to clear")
    if (istrue) {
      dispatch(TodoAction.deleteToTodo())
    }
  }
  return (
    <div className="row">
      <div className="col-lg-7 mx-auto">
        <div className="card border-0 shadow">
          <div className="card-body p-5">
            <button className="btn btn-primary" onClick={clearHandler}>
              Clear All
            </button>
            <div className="table-responsive">
              <table className="table m-0">
                <thead>
                  <tr>
                    <th scope="col" className="text-center">
                      TODO
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <TableBody data={data} />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Display
