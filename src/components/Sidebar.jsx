import Avatar from '/img/image.webp'
import '../styles/components/sidebar.sass'
import InforContainer from './InforContainer'
import SocialNetworks from './SocialNetworks'

const sidebar = () => {
  return (
    <aside id='sidebar'>
      <img src={Avatar}></img>
      <p className='title'>Desenvolvedora</p>
      <SocialNetworks/>
      <InforContainer />
      <a href="https://drive.google.com/file/d/1J2swLmIxmbWGWHcO7W0c-d2Z6bTNpVjV/view?usp=drive_link" target='blank' className='btn'>
        Download currículo
      </a>
    </aside>
    )
}

export default sidebar
