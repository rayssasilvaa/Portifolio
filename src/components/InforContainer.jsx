import React from 'react'
import '../styles/components/infocontainer.sass'
import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai'

const InforContainer = () => {
  return (
    <section id='info'>
        <div className='info-card'>
            <AiFillPhone id='phone-icon' />
            <div>
                <h3>Telefone</h3>
                <p>(12)997484088</p>
            </div>
        </div>
        <div className='info-card'>
            <AiOutlineMail id='email-icon' />
            <div>
                <h3>Email</h3>
                <p>rayssavitoria12silva@gmail.com</p>
            </div>
        </div>
        <div className='info-card'>
            <AiFillEnvironment id='pin-icon' />
            <div>
                <h3>Localização</h3>
                <p>Cruzeiro-SP</p>
            </div>
        </div>
    </section>
  )
}

export default InforContainer
