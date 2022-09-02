import React from 'react'
import SectionHead from './SectionHead'
import {HiOutlineUserGroup} from 'react-icons/hi'
import Px1 from '../images/px1.png'

const WhoWeAre = () => {
  return (
    <div className='container whoweare__container'>
        <SectionHead icon={<HiOutlineUserGroup/>} title="Meet the Team"/>
        <div className='whoweare__wrapper'>
            <div className='bio'>
                <img src={Px1} alt="person"/>
                <div className='content'>
                    <h2>Sewon Park</h2>
                    <h3>Project Lead & Founder</h3>
                    <h4>Minim laboris qui occaecat nisi est. Eu irure esse reprehenderit est in. Duis qui ea cupidatat anim aliqua adipisicing. Non elit anim et velit adipisicing culpa. Duis ea fugiat sint laboris aliqua mollit velit. Ullamco nostrud laboris aute non tempor non in officia duis elit cillum. Irure consequat nisi tempor officia laborum esse ex ea.</h4>
                </div>
            </div>
            <div className='bio'>
                <img src={Px1} alt="person"/>
                <div className='content'>
                    <h2>Ryan Zhao</h2>
                    <h3>Head of Blockchain</h3>
                    <h4>Minim laboris qui occaecat nisi est. Eu irure esse reprehenderit est in. Duis qui ea cupidatat anim aliqua adipisicing. Non elit anim et velit adipisicing culpa. Duis ea fugiat sint laboris aliqua mollit velit. Ullamco nostrud laboris aute non tempor non in officia duis elit cillum. Irure consequat nisi tempor officia laborum esse ex ea.</h4>
                </div>
            </div>
            <div className='bio'>
                <img src={Px1} alt="person"/>
                <div className='content'>
                    <h2>Gio Huh</h2>
                    <h3>Head of Technology</h3>
                    <h4>Minim laboris qui occaecat nisi est. Eu irure esse reprehenderit est in. Duis qui ea cupidatat anim aliqua adipisicing. Non elit anim et velit adipisicing culpa. Duis ea fugiat sint laboris aliqua mollit velit. Ullamco nostrud laboris aute non tempor non in officia duis elit cillum. Irure consequat nisi tempor officia laborum esse ex ea.</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhoWeAre