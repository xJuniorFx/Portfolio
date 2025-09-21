import aluroni from '../../assets/img/Aluroni.png';
import studies from '../../assets/img/aluraStudies.png';
import gericht from '../../assets/img/gericht-rest.png';
import gerichtMobile from '../../assets/img/gerichtMobile.png';
import aluroniMobile from '../../assets/img/aluroniMobile.png';
import studiesMobile from '../../assets/img/StudiesMobile.png';
import maintenance from '../../assets/img/maintenance.png';
import workDashboard from '../../assets/img/workDashboard.png';

interface Project {
	title: string;
	description: string;
	linkGit: string;
	linkProject: string;
	imgLink: string;
	imgLinkMobile: string;
}
const projectData: Project[] = [
	{
		title: 'Gericht Restaurant',
		description:
			'Gericht Restaurant is a project that provides an elegant and user-friendly interface to explore, learn about the restaurant and get a taste of its ambiance.',
		linkGit: 'https://github.com/xJuniorFx/Gericht-Restaurant/',
		linkProject: 'https://xjuniorfx.github.io/Gericht-Restaurant/',
		imgLink: gericht,
		imgLinkMobile: gerichtMobile,
	},
	{
		title: 'Work Dashboard',
		description:
			'Work Dashboard is an application in progress focused on task management and productivity in the workplace. The tool allows users to view, organize, and track tasks in a clear and intuitive way',
		linkGit: 'https://github.com/xJuniorFx/WorkDashboard',
		linkProject: 'https://main.d1j1foeipdmbxm.amplifyapp.com/',
		imgLink: workDashboard,
		imgLinkMobile: workDashboard,
	},
	{
		title: 'Aluroni',
		description:
			'Aluroni is a project I developed to create an interactive menu page. Users can filter and sort options to view available meals.',
		linkGit: 'https://github.com/xJuniorFx/Aluroni',
		linkProject: 'https://xjuniorfx.github.io/Aluroni/',
		imgLink: aluroni,
		imgLinkMobile: aluroniMobile,
	},
	{
		title: 'Alura Studies',
		description:
			'Alura Studies is a project that provides a clear visual overview of your tasks, helping you manage your time more effectively.',
		linkGit: 'https://github.com/xJuniorFx/AluraStudies',
		linkProject: 'https://xjuniorfx.github.io/AluraStudies/',
		imgLink: studies,
		imgLinkMobile: studiesMobile,
	},

	{
		title: 'Maintenance',
		description: 'Update coming soon',
		linkGit: 'https://github.com/xJuniorFx?tab=repositories',
		linkProject: '#projects',
		imgLink: maintenance,
		imgLinkMobile: maintenance,
	},
];

export default projectData;
