import React from 'react'
import Cards from './Cards'
import img from '../images/magnet-me-315vPGsAFUk-unsplash.jpg'
import img3 from '../images/honey-yanibel-minaya-cruz-6gSyEKq4Pvg-unsplash.jpg'
import img2 from '../images/bruno-rodrigues-279xIHymPYY-unsplash.jpg'
import img4 from '../images/alexandr-podvalny-DQGw6NKpqPg-unsplash.jpg'
import img5 from '../images/markus-winkler-k_Am9hKISLM-unsplash.jpg'
import img6 from '../images/nathan-dumlao-6VhPY27jdps-unsplash.jpg'
function Explore() {
  return (
    <div>
    <div className='flex'>
        <Cards className="w-1" name="CL-TIBA Privacy statement" info='' image={img}/>
        <Cards name="Platform Privacy statement" info='' image={img2}/>
       
    </div>
    <div className="flex">
    <Cards name="Public payers" info='clarepay Helps governments deliver universal healthcare coverage' image={img3}/>
    <Cards name="Public payers" info='clarepay makes it easier for companies, insurers and donor programs to manage outpatient healthcare schemes' image={img4}/>
    </div>
    <div className="flex">
    <Cards name="Terms of Service" info='' image={img5}/>
    <Cards name="Website Privacy Statement" info='' image={img6}/>
    </div>
    </div>
  )
}

export default Explore