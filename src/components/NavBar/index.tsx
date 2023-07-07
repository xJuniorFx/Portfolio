import styles from './NavBar.module.scss'
import logo from '../../assets/img/logo.svg'
import classNames from 'classnames';
import { useState, useEffect} from 'react';

 const NavBar = ()=>{

    const [activeLink, setActiveLink] = useState<string>('home');

    const onUpdateActiveLink = (value: string) => {
        setActiveLink(value)
    }

    useEffect(() => {
        const handleScroll = () => {
            const homeElement = document.getElementById('home');
            const aboutElement = document.getElementById('about');
            const projectsElement = document.getElementById('projects');
            const contactElement = document.getElementById('contact');

            const scrollPosition = window.scrollY;

                if (
                homeElement && scrollPosition >= homeElement.offsetTop && aboutElement && scrollPosition < aboutElement.offsetTop &&
                activeLink !== 'home'
            ) {
                setActiveLink('home');
            } else if (
                aboutElement && scrollPosition >= aboutElement.offsetTop && projectsElement && scrollPosition < projectsElement.offsetTop &&
                activeLink !== 'about'
            ) {
                setActiveLink('about');
            } else if (
                projectsElement && scrollPosition >= projectsElement.offsetTop && contactElement && scrollPosition < contactElement.offsetTop &&
                activeLink !== 'projects'
            ) {
                setActiveLink('projects');
            } else if (
                contactElement && scrollPosition >= contactElement.offsetTop &&
                activeLink !== 'contact'
            ) {
                setActiveLink('contact');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [activeLink]);

    return(
        <div className={styles.header}>
            
            <a 
                href='#home' 
                className={styles.navbarLogo} 
                onClick={()=> onUpdateActiveLink('home')}

            ><img className={styles.logo} src={logo} alt='Logo'/></a>
            
            
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
