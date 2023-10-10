'use client';
import Image from 'next/image';
import GalleryCSS from './gallery.module.css';
import { useState, useEffect } from 'react';

const Gallery = (props: any) => {
    return (<div className={`${props.className} ${GalleryCSS.gallery}`}>
        <div className={`${GalleryCSS.gridContainer}`}>
            <img src='/ms_mobile_thm.svg' className={`${GalleryCSS.image}`} alt="SVG Display" />
            <img src='/ms_pos_thm.svg' className={`${GalleryCSS.image}`} alt="SVG Display" />
            <img src='/ms_web_thm.svg' className={`${GalleryCSS.image}`} alt="SVG Display" />
            <img src='/stumble_thm.svg' className={`${GalleryCSS.image}`} alt="SVG Display" />
            <img src='/cle_go_mobile_thm.svg' className={`${GalleryCSS.image}`} alt="SVG Display" />
            <img src='/cle_go_thm.svg' className={`${GalleryCSS.image}`} alt="SVG Display" />
            <img src='/novusterra_web_thm.svg' className={`${GalleryCSS.image}`} alt="SVG Display" />
            <img src='/ecom_thm.svg' className={`${GalleryCSS.image}`} alt="SVG Display" />
        </div>
    </div>);
}

export default Gallery;