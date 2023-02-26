import khashmisSaperavi from "../images/wines/khashmisSaperavi.jpg";
import shavkapito from "../images/wines/shavkapito.jpg";
import chinuriGoruli from "../images/wines/chinuriGoruli.jpg";
import rkatsiteli from "../images/wines/rkatsiteli.jpg";

import tavkveri from "../images/wines/tavkveri.jpg";

const products = [
  {
    id: "01",
    manufacturer:'etno okami',
    productName: "KHASHMI’S SAPERAVI",
    geoName:'ხაშმის საფერავი',
    year: "2021",
    imgUrl: khashmisSaperavi,
    category: "wine",
    region: "kakheti",
    type: "dry red",
    alcohol: 13.5,
    price: 27.5,
    shortDesc: `The grapes are cultivated in protected 
      designations of origin – Khashmi`,
    description: `The grapes are cultivated in protected 
      designations of origin – Khashmi. The wine 
      is made by using Georgian traditional 
      Qvevri winemaking method, with full skin 
      contact. Afterwards, it goes through 3-
      month maceration.
      The wine is dark cherry coloured, intensive 
      and complex with aromas of ripe 
      blackberry, cherry, cornel, eglantine and 
      black currant. It is harmonious and well 
      balanced in taste, with medium cheerful 
      acidity and velvety tannins. It has a long 
      finish with pleasant tomes of berries.`,
  },

  {
    id: "02",
    manufacturer:'etno okami',
    productName: "SHAVKAPITO",
    geoName:'შავკაპიტო',
    year: "2021",
    imgUrl: shavkapito,
    category: "wine",
    region: "kartli",
    type: "dry red",
    alcohol: 13,
    price: 25,
    shortDesc: `The grapes are cultivated in Kartli and the wine is made by using Georgian 
      traditional Qvevri winemaking method`,
    description: `The grapes are cultivated in Kartli and the wine is made by using Georgian 
      traditional Qvevri winemaking method, with full skin contact. It goes through 
      3-month maceration, and then continues aging in oak barrels for 6 months.
      The wine is dark ruby in colour, with sharply distinguished aromas of spices, 
      dried leaves, wet earth, cornel and black plum. The taste is full, distinct rich 
      tannins and piquant spiciness that lasts for a long time.`,
  },

  {
    id: "03",
    manufacturer:'etno okami',
    productName: "CHINURI – GORULI MTSVANE",
    geoName:'ჩინური გორული მწვანე',
    year: "2021",
    imgUrl: chinuriGoruli,
    category: "wine",
    region: "kartli",
    type: "dry white",
    alcohol: 11,
    price: 22.5,
    shortDesc: `intensive straw in colour
    characterized by harmoniously combined, pleasant aromas of wild pear, green 
   apple, raw walnut and white current.`,
    description: `intensive straw in colour
       characterized by harmoniously combined, pleasant aromas of wild pear, green 
      apple, raw walnut and white current.
       balanced in taste, with medium velvety tannins and above-average cheerful 
      acidity.
      It has a biting spiciness, a long and pleasant finish with tones of stone fruit`,
  },
  {
    id: "04",
    manufacturer:'etno okami',
    productName: "RKATSITELI",
    geoName:'რქაწითელი',
    year: "2021",
    imgUrl: rkatsiteli,
    category: "wine",
    region: "kakheti",
    type: "dry white",
    alcohol: 12,
    price: 18,
    shortDesc: `The grapes are cultivated in Kakheti and the wine is made by using Georgian 
      traditional Qvevri winemaking method,`,
    description: `The grapes are cultivated in Kakheti and the wine is made by using Georgian 
      traditional Qvevri winemaking method, with full skin contact. Afterwards, it 
      goes through 3-month maceration.
      The wine is intensive golden in colour. It has a pleasant aroma of ripe pears, 
      nectarine, quince and dried herbs. The wine is full-bodied, cheerful with 
      medium acidity and long-lasting velvety tannins. It has a gentle, medium 
      duration finish.`,
  },
  {
    id: "05",
    manufacturer:'etno okami',
    productName: "TAVKVERI",
    geoName:'თავკვერი',
    year: "2021",
    imgUrl: tavkveri,
    category: "wine",
    region: "kartli",
    type: "dry red",
    alcohol: 11,
    price: 25,
    shortDesc: `The grapes are cultivated in Kartli 
    and the wine is made by using 
    Georgian traditional Qvevri 
    winemaking method`,
    description: `The grapes are cultivated in Kartli 
    and the wine is made by using 
    Georgian traditional Qvevri 
    winemaking method, with full skin 
    contact. Afterwards, it goes through 
    3-month maceration.
    The wine is an intense ruby in 
    colour, with pleasant and well 
    expressed aromas of plum, red 
    current, early summer apple, ripe 
    cherry and creamy butter. The taste 
    has a medium acidity and well-distinguished young, strong tannins 
    that last for a long time.`,
  },
 
];

export default products;
