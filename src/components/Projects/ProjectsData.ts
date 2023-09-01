import aluroni from "../../assets/img/Aluroni.png";
import studies from "../../assets/img/aluraStudies.png";
import gericht from "../../assets/img/gericht-rest.png";
import maintenance from "../../assets/img/maintenance.png";

interface Project {
  title: string;
  description: string;
  linkGit: string;
  linkProject: string;
  imgLink: string;
}
const projectData: Project[] = [
  {
    title: "Gericht Restaurant",
    description:
      "Gericht Restaurant is a project that provides an elegant and user-friendly interface to explore, learn about the restaurant and get a taste of its ambiance.",
    linkGit: "https://github.com/xJuniorFx/Gericht-Restaurant/",
    linkProject: "https://xjuniorfx.github.io/Gericht-Restaurant/",
    imgLink: gericht,
  },
  {
    title: "Aluroni",
    description:
      "Aluroni is a project I developed to create an interactive menu page. Users can filter and sort options to view available meals.",
    linkGit: "https://github.com/xJuniorFx/Aluroni",
    linkProject: "https://xjuniorfx.github.io/Aluroni/",
    imgLink: aluroni,
  },
  {
    title: "Alura Studies",
    description:
      "Alura Studies is a project that provides a clear visual overview of your tasks, helping you manage your time more effectively.",
    linkGit: "https://github.com/xJuniorFx/AluraStudies",
    linkProject: "https://xjuniorfx.github.io/AluraStudies/",
    imgLink: studies,
  },
  {
    title: "Maintenance",
    description: "Update coming soon",
    linkGit: "https://github.com/xJuniorFx?tab=repositories",
    linkProject: "#projects",
    imgLink: maintenance,
  },
];

export default projectData;
