import React from 'react'

export default function OneProduct(props) {
  return (
    <>
        <div className="col-lg-3">
             <h2 className='text-light-emphasis'>{props.title}</h2>
             <p>{props.desc}</p>
             <p>{props.price}</p>
            </div>
    </>
  )
}
