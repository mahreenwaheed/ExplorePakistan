import React from "react"
import { tpost } from "../../../../dummyData"
import Heading from "../../../common/heading/Heading"
import "./tpost.css"

const Tpost = () => {
  return (
    <>
      <section className='tpost'>
        <Heading title='Islamic Culture' />
        {tpost.map((val) => {
          return (
            <div className='box flexSB'>
              <div className='img'>
                <img src={val.cover} alt='' />
              </div>
              <div className='text'>
                <h1 className='title'>{val.title.slice(0, 35)}...</h1>
                
              </div>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default Tpost
