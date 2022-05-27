import React from 'react'
import { BsTwitter, BsWhatsapp, BsGithub } from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <BsTwitter />
        </div>
        <div>
            <BsGithub />
        </div>
        <div>
            <BsWhatsapp />
        </div>
    </div>
  )
}

export default SocialMedia