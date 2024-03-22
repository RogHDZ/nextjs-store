"use client"
import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './Description.module.sass';
import Image from 'next/image';


const PLACEHOLDER_IMAGE = 'data:image/jpeg;base64,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'

export const Description = () => {
    const [hasBorder, setBorder] = useState(false)
    const handleClick = () => setBorder(!hasBorder);
    const cx = classNames.bind(styles);
    const buttonStyles = cx('Description__button',{
        'Description__button--border': hasBorder,
    });
    console.log(buttonStyles)
    return(
        <section className={styles.Description}>
            <button onClick={handleClick} className={buttonStyles}>

                <div className={styles.Description__imageContainer}>
                    <Image 
                        src="/images/description.jpeg" 
                        alt="products marketplace" 
                        fill placeholder='blur' 
                        blurDataURL={PLACEHOLDER_IMAGE}
                    />
                </div>
            </button>
            <div className={styles.Description__text}>
                <h2>Bring the future today</h2>
                <p>Future World: Your Gateway to Tomorrow's Tech! Dive into a world of cutting-edge gadgets and gear. Stay ahead of the curve and redefine your digital lifestyle with us.</p>
            </div>
        </section>
    )
}