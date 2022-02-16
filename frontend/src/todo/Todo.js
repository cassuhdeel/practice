import React from 'react'

export default function Todo() {



  return (
    <div>
        <h1>This is the Todo page</h1>
        <button className='btn btn-dark'>Add Todo</button>

        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Dishes</td>
      <td>Wash the Dishes</td>
      <td><button className='btn btn-warning'>Edit</button></td>
      <td><button className='btn btn-danger'>Delete</button></td>
    </tr>
  </tbody>
</table>

    </div>
  )
}
