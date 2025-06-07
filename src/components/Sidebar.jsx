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
      <a href="https://drive.google.com/file/d/1nw38_3zail9M02RAyiZ3ucJWJTgY-6lk/view?usp=sharing" target='blank' className='btn'>
        Download currículo
      </a>
    </aside>
    )
}

export default sidebar
