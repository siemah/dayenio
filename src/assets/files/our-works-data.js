// INPTIC
import gew from '../images/our-works/csi-inptic/gew-inptic.png';
import itsday from '../images/our-works/csi-inptic/its-day.jpg';
import jit from '../images/our-works/csi-inptic/jit-inptic.png';

//Wellness Inc.
import wellnessCaseImg from '../images/our-works/wellness/wellness.png';
import android1 from '../images/our-works/wellness/android1.png';
import android3 from '../images/our-works/wellness/android3.png';
import android4 from '../images/our-works/wellness/android4.png';
import android5 from '../images/our-works/wellness/android5.png';
import android6 from '../images/our-works/wellness/android6.png';

//shahrani
import shahraniCase from '../images/our-works/elshahrani/shahrani.png';

//brands logo
import inptic from '../images/logos/brands/inptic.jpg';
import wellnessLogo from '../images/logos/brands/wellness.png';
import shahrani from '../images/logos/brands/shahrani.png';

export default [
  {
    key: 'item-1',
    brand: 'Wellness Inc.',
    carouselImages: [
      { src: android1, alt: "Main screen" },
      { src: android3, alt: "Nutrition screen" },
      { src: android4, alt: "Nutrition sections screen" },
      { src: android5, alt: "Main screen" },
      { src: android6, alt: "Main screen of center" },
    ],
    right: true,
    logo: wellnessLogo,
    caseImgAlt: 'Inptic logo',
    techs: ['Photoshop', 'Ilustrator', 'InDesign'],
    caseDescription: `is a training institute. train the elites in the field of ICT. In several times we have cuncus and manage events of the scientific club of this institute`,
    isCarousel: true,
  },
  {
    key: 'item-2',
    brand: 'Wellness Inc.',
    carouselImages: null,
    logo: wellnessLogo,
    altLogo: 'wellness inc',
    caseImgAlt: 'wellness logo',
    caseImg: wellnessCaseImg,
    techs: ['HTML5', 'Nodejs', 'Mongodb', 'Wordpress', 'Mysql'],
    caseDescription: `The first website specialised in healthy lifestyle where the elements of wellness meet in qatar. In this case we make android application veriosn of wellnessqatar0com website.`,
    link: `www.wellnessqatar.com`,
    isCarousel: false,
  },
  {
    key: 'item-3',
    brand: 'CSI INPTIC',
    carouselImages: [
      { src: gew, alt: "GEW event" },
      { src: itsday, alt: "It's day event" },
      { src: jit, alt: "JIT event" },
    ],
    right: true,
    logo: inptic,
    caseImgAlt: 'Inptic logo',
    techs: ['Photoshop', 'Ilustrator', 'InDesign'],
    caseDescription: `is a training institute. train the elites in the field of ICT. In several times we have cuncus and manage events of the scientific club of this institute.`,
    isCarousel: true,
  },
  {
    key: 'item-4',
    brand: 'Elshahrani',
    carouselImages: null,
    logo: shahrani,
    altLogo: 'Elshahrani',
    caseImgAlt: 'Elshahrani',
    caseImg: shahraniCase,
    techs: ['HTML5', 'Javascript', 'Wordpress', 'Mysql'],
    caseDescription: `Doctor mohammed elshahrani website is a doctor in IOT, Big Data, data analytic and more..`,
    link: `m-shahrani.com`,
    isCarousel: false,
  },
]