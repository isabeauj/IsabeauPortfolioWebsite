'use client';
import Image from 'next/image';
import Stars from './stars';
import HowdyDoodieCSS from './howdyDoodie.module.css'
import { useState, useEffect } from 'react';


function HowdyDoodie(props: any) {
    return (<div className={`${props.className} ${HowdyDoodieCSS.horizFlex}`}>
        <div className={`${HowdyDoodieCSS.picSide}`}>
            <div className={`${HowdyDoodieCSS.image}`}>
                <img src='/howdy2.png' className={`${HowdyDoodieCSS.image2}`} alt="SVG Display" />
                <img src='/rays.svg' className={`${HowdyDoodieCSS.rays}`} alt="SVG Display" />
            </div>
        </div>
        <div className={`${HowdyDoodieCSS.textSide}`}>
            <h1 className={`${HowdyDoodieCSS.text}`}>Howdy Doodie, Pardner</h1>
            <p className={`${HowdyDoodieCSS.quoteText}`}>I'm Isabeau Jackson, a passionate UI/UX designer proudly rooted near Cleveland, Ohio. I specialize in blending artistry and empathy to orchestrate intuitive digital experiences.</p>
            <p className={`${HowdyDoodieCSS.quoteText}`}>I may be a dedicated UI/UX designer, but I have a fervent love for music that runs just as deep. While I thrive in the world of pixels and user experiences, my heart beats to the rhythm of melodies and harmonies while I listen to/play/write music.</p>
        </div>

    </div>)
}

export default HowdyDoodie