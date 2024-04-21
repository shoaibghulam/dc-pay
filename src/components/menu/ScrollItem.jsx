/* eslint-disable react/prop-types */
import { Link } from 'react-scroll'

export default function ScrollItem({id,className="",title}) {
  return (
    <>
    <Link 
      activeClass="text-primary" 
      to={id} 
      spy={true} 
      smooth={true} 
      className={className+" text-md cursor-pointer"}
      offset={50} 
      duration={500} 
    //   onSetActive={handleSetActive}
    >
      {title}
    </Link>
    </>
  )
}
