import React from 'react'
import { motion } from 'framer-motion';
import { BsTwitter, BsWhatsapp, BsGithub } from 'react-icons/bs'

import { images } from '../../constants';

import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [ 0, 1 ],
    opacity: [ 0, 1 ],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div id='home' className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0,1] }}
        transition={{ duration: 0.7 }}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋🏽</span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'> Hello, I'm </p>
              <h1 className='head-text'>
                Ntami Egbe
              </h1>
            </div>
          </div>

          <div className='tag-cmp app__flex'>
            <p className='p-text'> Web Developer </p>
            <p className='p-text'> Freelancer </p>
          </div>

          <div className="soc-cmp app__flex app__social-header">
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
              <a href='https://wa.me/8087081503' target="_blank">
                <BsWhatsapp />
              </a>
            </div>
          </div>  
        </div>
      </motion.div>


      <motion.div
        whileInView={{ opacity: [0,1] }}
        transition={{ duration: 0.7, delayChildren: 0.3 }}
        className='app__header-img'
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0,1] }}
          transition={{ duration: 1, ease: 'easeInOut'}}
          className='overlay_circle'
          src={images.circle}
          alt='profile_circle'
        />

      </motion.div>


      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {[images.html, images.css, images.javascript, images.react].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt='circle' />
          </div>
        ))}
      </motion.div>

    </div>
  )
}

export default Header