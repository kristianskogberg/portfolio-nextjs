import pokentialImage from "@/public/project-screenshots/pokential.png";

import NFTGraphImage from "@/public/project-screenshots/nftgraph.png";

import PokeTypeImage from "@/public/project-screenshots/poketype.png";

import MyGroovyRecipes_1 from "@/public/project-screenshots/my-groovy-recipes-1.png";
import MyGroovyRecipes_2 from "@/public/project-screenshots/my-groovy-recipes-2.png";
import MyGroovyRecipes_3 from "@/public/project-screenshots/my-groovy-recipes-3.png";

export const projectsData = [
  {
    title: "Pokéntial",
    images: [pokentialImage],
    demo: "https://youtu.be/g1gF3X6rwUM",
    code: "https://github.com/kristianskogberg/pokential",
    description:
      "A Pokémon-themed web app I created with React. Users can search for any Pokémon and it will display a lot of interesting data for that Pokémon such as what kind of moves it will learn at which level in the different main series Pokémon games. Work in progress.",
    skills: ["React", "REST API", "UI/UX Design", "Tailwind CSS"],
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
    title: "PokeType",
    images: [PokeTypeImage],
    demo: "https://play.google.com/store/apps/details?id=com.pgkrsk.pokemontypecalculator&hl=en&gl=US",
    code: "https://github.com/kristianskogberg/poketype",
    description:
      "A mobile app built with React Native. Users can search for any Pokémon and the application will display and calculate useful information about that Pokémon based on its type. I have released new updates and bug fixes to the app bases on user feedback. PokeType can be downloaded from Google Play Store for free.",
    skills: ["React Native", "REST API", "UI/UX Design", "Deployment"],
  },
  {
    title: "My Groovy Recipes",
    images: [MyGroovyRecipes_3],
    demo: "",
    code: "https://github.com/kristianskogberg/my-groovy-recipes",
    description:
      "A recipe mobile app built with Flutter. Users can save, view, edit and remove their personal recipes, search and filter them based on the recipe names and tags and dynamically change the servings size.",
    skills: ["Flutter", "Firebase", "Dart", "REST API", "UI/UX Design"],
  },
];
