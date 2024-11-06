import React from 'react';
import styles from './scrolltoTop.module.css';

const ScrolltoTop = ({scrollToSection, navbarRef}) => {

    return (
        <div onClick={() => scrollToSection(navbarRef)} className={styles.scrollTop}>
            <i class="fa-solid fa-sort-up" />
        </div>
    );
};

export default ScrolltoTop;
