import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='box logo'>
            <img src='../images/logo.jpg' alt='' width={'70px'}  height={'70px'}
           />
            <p>Busan is an amazing magazine Blogger theme that is easy to customize for your needs</p>
            <i className='fa fa-envelope'></i>
            <span> softwarehouse986@gmail.com </span> <br />
          
          </div>
          <div className='box'>
            <h3>SPORT</h3>
            <div className='item'>
              <img src='../images/hero/sport.jpg' alt='' />
              <p>Best Game</p>
            </div>
           
          </div>
          <div className='box'>
            <h3>CRICKET</h3>
            <div className='item'>
              <img src='../images/hero/cri.jpg' alt='' />
              <p>Best Game</p>
            </div>
            
          </div>
          <div className='box'>
            <h3>LABELS</h3>
            {/*<i className='fa fa-chevron-right'></i>*/}
            <ul>
              <li>
                <span>Boxing</span> <label>(5)</label>
              </li>
              <li>
                <span>Fashion</span> <label>(6)</label>
              </li>
              <li>
                <span>Health</span> <label>(7)</label>
              </li>
              <li>
                <span>Nature</span> <label>(9)</label>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal  '>
        <div className='container flexSB'>
          <p>© all rights reserved</p>
          <p>
            made with <i className='fa fa-heart'></i> by Mahreen Waheed
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer
