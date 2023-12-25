import pokentialImage from "@/public/project-screenshots/pokential.png";

import NFTGraphImage from "@/public/project-screenshots/nftgraph.png";

import PokeTypeImage from "@/public/project-screenshots/poketype.png";

import GGMImage from "@/public/project-screenshots/ggm.png";

export const projectsData = [
  {
    title: "Pokéntial",
    image: pokentialImage,
    demo: "https://youtu.be/g1gF3X6rwUM",
    code: "https://github.com/kristianskogberg/pokential",
    description:
      "A Pokémon-themed web app I created with React. Users can search for any Pokémon and it will display a lot of interesting data for that Pokémon such as what kind of moves it will learn at which level in the different main series Pokémon games. Work in progress.",
    skills: ["React", "REST API", "UI/UX Design", "Tailwind CSS"],
  },

  {
    title: "NFTGraph",
    image: NFTGraphImage,
    demo: "https://youtu.be/L82skPsRVE8",
    code: null,
    description:
      "A web app I created with React. Users can search for any NFT collection and the app will fetch data for collections using OpenSea API and IcyTools API. It will also display NFT sales data in real-time and update the UI and graphs automatically.",
    skills: ["React", "Chart.js", "REST APIs", "GraphQL", "UI/UX Design"],
  },
  {
    title: "PokeType",
    image: PokeTypeImage,
    demo: "https://play.google.com/store/apps/details?id=com.pgkrsk.pokemontypecalculator&hl=en&gl=US",
    code: "https://github.com/kristianskogberg/poketype",
    description:
      "A mobile app where users can search for any Pokémon and it will display and calculate useful information about that Pokémon based on its type. PokeType can be found on the Google Play Store.",
    skills: ["React Native", "REST API", "UI/UX Design", "Deployment"],
  },
  {
    title: "Gas Monitoring Software",
    image: GGMImage,
    demo: "https://youtu.be/3wqPgbNJLXw",
    code: null,
    description:
      "A desktop application where users are able to select some greenhouse gases from a specific time frame and the application will fetch selected data and draw graphs based on the returned data. I created this software with two other students during a Software Design course and we were given the highest grade for this project.",
    skills: ["C++", "MVC", "Qt Creator", "Rest APIs", "Teamwork"],
  },
];
