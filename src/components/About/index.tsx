import styles from './About.module.scss'
import img from '../../assets/img/perfil-2.png'

const About = () => {
    return(
        
        <section className={styles.about} id='about'>
            <div className={styles.row}>
                <div className={styles.aboutImg}>
                    <img src={img} alt='foto-perfil'/>
                </div>
                <div className={styles.aboutContent}>
                    <h1>About <span>Me</span></h1>
                    <p>
                        I have been captivated by technology since I was young. From the moment I laid my hands on a 
                        computer, I was instantly hooked and couldn't get enough of it. As I grew older, my fascination 
                        with technology only intensified, and I realized that my true calling lies in becoming a front-end
                        developer.
                    </p>
                    <p>
                        What truly sets me apart is my unwavering passion and determination. I thrive on challenges and 
                        the ever-evolving nature of technology excites me. I firmly believe that being a front-end 
                        developer is not just about writing code; it's about crafting memorable user experiences and 
                        making a meaningful impact.
                    </p>
                    <p>
                        And in this portfolio is the record of my exhilarating adventure in the world of front-end 
                        development so far.
                    </p>
                    <h2 className={styles.subTitle}>Technologies</h2>
                    <div className={styles.technologies}>
                        
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />                       
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />                       
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />                       
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />         
                        
                    </div>
                    
                </div>
            </div>
            
        </section>
    )

}

export default About;