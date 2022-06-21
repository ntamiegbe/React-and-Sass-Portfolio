import React from 'react'
import { BsTwitter, BsWhatsapp, BsGithub } from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href='https://twitter.com/ntamiegbe' target="_blank">
            <BsTwitter />
          </a>
        </div>
        <div>
          <a href='https://github.com/ntamiegbe' target="_blank">
            <BsGithub />
          </a>
        </div>
        <div>
          <a href='https://wa.me/+2348087081503' target="_blank">
            <BsWhatsapp />
          </a>
        </div>
    </div>
  )
}

export default SocialMedia