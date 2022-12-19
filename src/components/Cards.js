import React from 'react'

function Cards(props) {
  return (
    <div className=" overflow-hidden w-[600px] h-[300px] m-12">
    <div className="rounded-lg  relative text-2xl ">
        <img src={props.image} className="object-scale-down" alt='tiba' />
        <div className="inside absolute top-0 left-6 m-4">
            <div className="font-extrabold">
                <p>{props.name}</p>
            </div>
            <div className="font-semibold text-2xl py-4 my-4 w-3/4  text-white">
                <p>{props.info}</p>
            </div>
            <div className="button rounded-full p-4 bg-black text-center text-white text-xl ">
              <button className="buttons" >More info</button> 
            </div>
        </div>
        
    </div> 
    </div>
  )
}

export default Cards