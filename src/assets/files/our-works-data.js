// import all files needed
import gew from '../images/our-works/csi-inptic/gew-inptic.png';
import itsday from '../images/our-works/csi-inptic/its-day.jpg';
import jit from '../images/our-works/csi-inptic/jit-inptic.png';

export default [
  {
    brand: 'CSI INPTIC',
    carouselImages: [
      { src: gew, alt: "GEW event" },
      { src: itsday, alt: "It's day event" },
      { src: jit, alt: "JIT event" },
    ],
    logo: jit,
    caseImgAlt: 'Inptic logo',
    techs: ['Photoshop', 'Ilustrator', 'InDesign'],
    caseDescription: `some description about project`,
    isCarousel: true,
  },
  {
    brand: 'Wellness Inc.',
    right: true,
    carouselImages: null,
    logo: jit,
    altLogo: 'wellness inc',
    caseImgAlt: 'wellness logo',
    caseImg: itsday,
    techs: ['HTML5', 'Nodejs', 'MongoDb'],
    caseDescription: `some description about project`,
    link: `www.wellnessqatar.com`,
    isCarousel: false,
  },
  {
    brand: 'Wellness Inc.',
    carouselImages: null,
    logo: jit,
    altLogo: 'wellness event',
    caseImgAlt: 'wellness event',
    caseImg: itsday,
    techs: ['HTML5', 'Wordpress', 'Php', 'MySql'],
    caseDescription: `some description about project`,
    link: `event.wellnessqatar.com`,
    linkLabel: `Wellness event`,
    isCarousel: false,
  },
]