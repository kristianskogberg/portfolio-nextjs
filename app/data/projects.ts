import pokentialImage from "@/public/project-screenshots/pokential.png";

import NFTGraphImage from "@/public/project-screenshots/nftgraph.png";

import PokeTypeImage from "@/public/project-screenshots/poketype.png";
import PokentialPoGoPVPIVCalc from "@/public/project-screenshots/pokential-pogo-pvp-iv-calc.png";
import SubtitleEditor from "@/public/project-screenshots/subtitleditor.png";
import MyGroovyRecipes_1 from "@/public/project-screenshots/my-groovy-recipes-1.png";
import MyGroovyRecipes_2 from "@/public/project-screenshots/my-groovy-recipes-2.png";
import MyGroovyRecipes_3 from "@/public/project-screenshots/my-groovy-recipes-3.png";

export const projectsData = [
  {
    title: "Subtitle Editor",
    images: [SubtitleEditor],
    demo: "https://subtitleditor.vercel.app/",
    code: "https://github.com/kristianskogberg/subtitle-editor",
    description:
      "A web app where users can upload videos and create, edit, and move subtitles. The duration of the subtitles can also be changed in the timeline. Redux is used for state management to store the subtitles and display them on the screen based on their start and end times. Users can toggle between light and dark mode. This app does not have a backend.",
    skills: ["React", "Redux", "UI/UX Design", "Tailwind CSS"],
  },
  {
    title: "Pokéntial - Pokemon GO PVP IV Calculator",
    images: [PokentialPoGoPVPIVCalc],
    demo: "https://pokential.vercel.app/",
    code: "https://github.com/kristianskogberg/pokential-pvp-iv-calc",
    description:
      "An IV calculator for Pokémon GO. Users can search for any Pokemon and select their IVs (stats) and calculate optimal rankings for different leagues for that Pokémon based on its IVs, base stats, CPs and IV floors. The user's calculations are automatically saved to localStorage for the sake of convenience. I used Zustand for lightweight state management library.",
    skills: ["Next.js", "UI/UX Design", "Tailwind CSS", "Zustand"],
  },
  {
    title: "NFTGraph",
    images: [NFTGraphImage],
    demo: "https://youtu.be/L82skPsRVE8",
    code: null,
    description:
      "A web app I created with React. Users can search for any NFT collection and the app will fetch data for collections using OpenSea API and IcyTools API. It will also display NFT sales data in real-time and update the UI and graphs automatically.",
    skills: ["React", "Chart.js", "REST APIs", "GraphQL", "UI/UX Design"],
  },
  {
    title: "My Groovy Recipes",
    images: [MyGroovyRecipes_3],
    demo: "https://youtu.be/5-VNVc6HHUE",
    code: "https://github.com/kristianskogberg/my-groovy-recipes",
    description:
      "A recipe mobile app built with Flutter. Users can save, view, edit and remove their personal recipes, search and filter them based on the recipe names and tags and dynamically change the servings size.",
    skills: ["Flutter", "Firebase", "Dart", "REST API", "UI/UX Design"],
  },
  {
    title: "PokeType",
    images: [PokeTypeImage],
    demo: "https://play.google.com/store/apps/details?id=com.pgkrsk.pokemontypecalculator&hl=en&gl=US",
    code: "https://github.com/kristianskogberg/poketype",
    description:
      "A mobile app built with React Native. Users can search for any Pokémon and the application will display and calculate useful information about that Pokémon based on its type. I have released new updates and bug fixes to the app bases on user feedback. PokeType can be downloaded from Google Play Store for free.",
    skills: ["React Native", "REST API", "UI/UX Design", "Deployment"],
  },
];
