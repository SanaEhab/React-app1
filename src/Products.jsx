import React from 'react'
import OneProduct from './OneProduct'

export default function Products() {
  const products = [
    {id:1, title:'Phones', desc: 'This is first product', price: 5000},
    {id:2, title:'Laptops', desc: 'This is second product', price: 4000},
    {id:3, title:'Airpods', desc: 'This is third product', price: 600},
    {id:4, title:'Watchs', desc: 'This is forth product', price: 500}
  ]
  return (
    <>
    <div className=' my-5'>
        <div className='container'>
            <div className="row">
            {products.map((product) => {
              return <OneProduct {...product} key={product.id}/>
            })}

        </div>
    </div>
    </div>
    </>
  )
}
