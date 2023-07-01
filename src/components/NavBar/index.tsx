import styles from './NavBar.module.scss'
import logo from '../../assets/img/logo.svg'
import menu from '../../assets/img/bx-menu.svg'
import classNames from 'classnames';
import { useState, useEffect } from 'react';

 const NavBar = ()=>{
    const [activeLink, setActiveLink] = useState<string>('home');

    const onUpdateActiveLink = (value: string) => {
        setActiveLink(value)
    }
    return(
        <div className={styles.header}>
            
            <a href='#home' className={styles.navbarLogo} onClick={()=> onUpdateActiveLink('home')}><img className={styles.logo} src={logo} alt='Logo'/></a>
            
            
            <nav className={classNames([styles.navbar])}>
                <a 
                    href='#home'
                    className={classNames({
                        [styles.active]: activeLink === 'home'
                    })}
                    onClick={()=> onUpdateActiveLink('home')}
                >Home</a>
                <a 
                    href='#about'
                    className={classNames({
                        [styles.active]: activeLink === 'about'
                    })}
                    onClick={()=> onUpdateActiveLink('about')}
                >About</a>
                <a 
                    href='#projects'
                    className={classNames({
                        [styles.active]: activeLink === 'projects'
                    })}
                    onClick={()=> onUpdateActiveLink('projects')}
                >Projects</a>
                <a 
                    href='#contact'
                    className={classNames({
                        [styles.active]: activeLink === 'contact'
                    })}
                    onClick={()=> onUpdateActiveLink('contact')}
                >Contact</a>
            </nav>

        </div>
    )
}

export default NavBar;
