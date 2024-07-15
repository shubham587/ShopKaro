import React, { useState } from 'react'

const UserForm = ({ fields, onSubmit, formTitle }) => {
  let initialValue = {}
  fields.foeEach((field, ind) => (
      { ...initialValue, [field.name]: ""}
  ))

  const [form, setForm] = useState(initialValue)
  const [error, setError] = useState({})

  console.log(initialValue);

  return (
    <>
      <form className='max-w-lg mx-auto p-8 bg-white shadow-md'>
        {formTitle ? <h1>{formTitle}</h1> : null}
        {
          fields.map((field, ind) => (
            <div key={ind} className="form-inputs flex flex-col m-5">
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor={field.name}>{field.label}</label>
              <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${error[field.name] ? 'border-red-500' : ''}`} type={field.type} name={field.name} value={form[field.name]}
                onChange={(e) => {
                  setForm({ ...form, [field.name]: e.target.value })
                }} />
            </div>
          ))
        }
      </form>
    </>
  )
}

export default UserForm