import Gif from '../../assets/img/Program.svg';
import github from '../../assets/img/github.svg';
import linkedin from '../../assets/img/linkedin.svg';
import styles from './Banner.module.scss';

const Banner = () => {
	return (
		<section className={styles.home} id="home">
			<div className={styles.content}>
				<div className={styles.left_content}>
					<h1>Hi, I'm Junior Fernandes</h1>
					<div className={styles.content_destaque}>
						<div className={styles.animated_text}>
							<h2 className={styles.destaque}>Web Developer</h2>
						</div>
						<div className={styles.social_network}>
							<a
								href="https://github.com/xJuniorFx"
								target="_blank"
								rel="noreferrer"
							>
								<img
									className={styles.network}
									alt="Github logo"
									src={github}
								></img>
							</a>
							<a
								href="https://www.linkedin.com/in/juniorfs/"
								target="_blank"
								rel="noreferrer"
							>
								<img
									className={styles.network}
									alt="Github logo"
									src={linkedin}
								></img>
							</a>
						</div>
					</div>
					<div className={styles.resume}>
						<p>
							I'm a proactive and self-motivated individual who enjoys taking on
							new challenges to expand my skills. I thrive in team environments,
							valuing clear communication and transparency.
						</p>
						<p>
							With the ability to work independently, I ensure projects are
							completed even under tight deadlines. Explore my portfolio to see
							the results of my dedicated efforts.
						</p>
					</div>
					<div className={styles.anchor_box} id={styles.anchoreffect}>
						<a href="#projects" className={styles.anchor}>
							Projects
						</a>
						<a href="#contact" className={styles.anchor}>
							Contact
						</a>
					</div>
				</div>
				<div className={styles.right_content}>
					<img src={Gif} alt="imagem" />
				</div>
			</div>
		</section>
	);
};

export default Banner;
