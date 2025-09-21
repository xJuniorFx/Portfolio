import styles from './About.module.scss';
import img from '../../assets/img/perfil-2.png';
import img2 from '../../assets/img/perfil.png';
import classNames from 'classnames';

const About = () => {
	return (
		<section className={styles.about} id="about">
			<div className={classNames(styles.container, styles.about__container)}>
				<div className={styles.about__content}>
					<div className={styles.title}>
						<h1>
							About <span>Me</span>
						</h1>
					</div>
					<p>
						I have been captivated by technology since I was young. From the
						moment I laid my hands on a computer, I was instantly hooked and
						couldn't get enough of it. As I grew older, my fascination with
						technology only intensified, and I realized that my calling lies in
						becoming a Programmer.
					</p>
					<p>
						What truly sets me apart is my unwavering passion and determination.
						I thrive on challenges and the ever-evolving nature of technology
						excites me. I firmly believe that being a front-end developer is not
						just about writing code; it's about crafting memorable user
						experiences and making a meaningful impact.
					</p>
					<p>
						This portfolio is the record of my exhilarating adventure in the
						world of front-end development so far.
					</p>
					<div className={styles.subTitle}>
						<h2>Technologies</h2>
					</div>
					<div className={styles.technologies}>
						<img
							alt="Icon React"
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
						/>
						<img
							alt="Icon Git"
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
						/>
						<img
							alt="Icon Node.js"
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
						/>
						<img
							alt="Icon Java"
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
						/>
						<img
							alt="Icon HTML"
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
						/>
						<img
							alt="Icon CSS"
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
						/>
						<img
							alt="Icon SASS"
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
						/>
						<img
							alt="Icon Javascript"
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
						/>
						<img
							alt="Icon Typescript"
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
