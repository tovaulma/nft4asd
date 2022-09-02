import React from 'react'
import SectionHead from './SectionHead'
import {HiOutlineUserGroup} from 'react-icons/hi'
import Px1 from '../images/px1.png'

const WhoWeAre = () => {
  return (
    <div className='container whoweare__container'>
        <SectionHead icon={<HiOutlineUserGroup/>} title="Who We Are"/>
        <div className='whoweare__wrapper'>
            <div className='bio'>
                <img src={Px1} alt="person"/>
                <div className='content'>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhoWeAre