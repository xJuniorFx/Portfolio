
import github from '../../assets/img/github.svg'
import linkedin from '../../assets/img/linkedin.svg'
import styles from './Banner.module.scss'
import imgBanner from '../../assets/img/background3.jpg'




const Banner = ()=> {
    return(
        
            <section className={styles.home} id='home'>
                
                <div className={styles.content}>
                    <h1>Hi, I'm Junior Fernandes</h1>
                    <div className={styles.animatedText}>
                        <h2>Front-End Developer</h2>
                    </div>
                    <p>
                        I'm a proactive and self-motivated individual who enjoys taking on new challenges to expand my 
                        skills. I thrive in team environments, valuing clear communication and transparency. With the 
                        ability to work independently, I ensure projects are completed even under tight deadlines. Explore
                        my portfolio to see the results of my dedicated efforts.
                    </p>
                    <div className={styles.anchorBox} id={styles.anchoreffect}>
                        <a href='#projects' className={styles.anchor}>Projects</a>
                        <a href='#contact' className={styles.anchor}>Contact</a>
                    </div>
                    <div className={styles.socialNetwork}>
                        <a href='https://github.com/xJuniorFx' target="_blank"><img className={styles.network} src={github}></img></a>
                        <a href='https://www.linkedin.com/in/juniorfs/' target="_blank"><img className={styles.network} src={linkedin} ></img></a>
                    </div>
                    
                    <span className={styles.homeHover}></span>
                </div>
                
            </section>
        
    )
}

export default Banner;