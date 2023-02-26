import personImg1 from "../images/image-002.jpg";
import personImg2 from "../images/download.jpg";

const personData = [
  {
    name: "Saba Qitiashvili",
    imgUrl: personImg1,
    information: `Enologist and certified
    Sommelier, winemaking Ethno Okami chief winemaker,
    Member of the National Tasting Commission. 
    Annual production of the current period - up to 7,000 bottles`,
    awards: [
      {
        award: `Shavkapito 2020 - gold medal (Kartli wine from Uplos competition
        to modern times"; organized by the Georgian Wine Guild)`,
      },
      {
        award: `Tavkveri 2020 - bronze medal (competition "Kartli wine from Uplos"
        to modern times"; organized by the Georgian Wine Guild)`,
      },
      {
        award: `Shavkapito 2021 – ROSSO; Merano Wine Festival (The Qvevri WineHunter Award
        Georgia 2022)`,
      },
    ],
  },
  {
    name: "Brenae Royal",
    imgUrl: personImg2,
    information: `Royal’s own success comes down to her nuanced 
    approach to farming. “I’ve built this skill set for looking 
    at a block of vines and really dissecting it based on all 
    of these different components,” she explains. “I have 54 blocks, 
    but based on the styles that the winemakers are going after, 
    we can farm those blocks in 105 different ways.”`,
  },

];
export default personData;
