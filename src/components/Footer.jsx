import React from 'react'

// FONTS
import { jakarta_bold, jakarta_regular, jakarta_semibold, jakarta_medium, jakarta_light } from "@/fonts";

// COMPONENTS
import TextEmoji from './TextEmoji';

function Footer() {
  return (
    <div className='flex justify-center items-center py-5'>
        <p className={`${jakarta_light.className} `}>Made with <TextEmoji image="/images/chibi.png" /> in Indonesia</p>
    </div>
  )
}

export default Footer