import aluroni from '../../assets/img/Aluroni.png'
import studies from '../../assets/img/aluraStudies.png'
import maintenance from '../../assets/img/maintenance.png'


interface Project {
    title: string;
    description: string;
    linkGit: string;
    linkProject: string;
    imgLink: string;
  }
  
const projectData: Project[] = [
    {
        "title": "Aluroni",
        "description": "Aluroni é um projeto que desenvolvi para criar uma página de cardápio interativa. Onde os usuários podem filtrar e ordenar as opções para visualizar as refeições disponíveis.",
        "linkGit":"https://github.com/xJuniorFx/Aluroni",
        "linkProject":"https://xjuniorfx.github.io/Aluroni/",
        "imgLink": aluroni
    },
    {
        "title": "Alura Studies",
        "description": "Alura Studies, é um projeto que proporciona um controle visual claro das suas atividades e poderá gerenciar seu tempo de maneira mais eficaz.",
        "linkGit":"https://github.com/xJuniorFx/AluraStudies",
        "linkProject":"https://xjuniorfx.github.io/AluraStudies/",
        "imgLink": studies
    },
    {
        "title": "Maintenance",
        "description": "Update coming soon",
        "linkGit":"https://github.com/xJuniorFx?tab=repositories",
        "linkProject":"#projects",
        "imgLink": maintenance
    }
]

export default projectData;
