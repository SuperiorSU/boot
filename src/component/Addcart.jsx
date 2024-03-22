import React from 'react'
import Carrid from './carr'

const Addcart = ({cart , removeHandle}) => {
  return (
    <div>
      {
        cart.length === 0 ? (<div>Nothing to SHow</div>): (
          <div>
            {
              cart.map((car , index)=><Carrid id={car.id}  key={index} removeHandle={removeHandle}  data={car} />
              )
            }
          </div>
        )
      }
    </div>
  )
}

export default Addcart