/* 

Descrizione:

Partendo dal template fornito renderizzare lo slider con Vue

Bonus:
1- al click su una thumb, visualizzare in grande l'immagine corrispondente
2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce

*/

/******** FUNCTIONS  ********/

/******** FUNCTIONS  ********/

/********* CODE MAIN ********/

console.log("JS START");
//array the represents the single objects of the thumbs or of one slide

const slides = [
  {
    image: "img/01.jpg",
    title: "Svezia",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
  },
  {
    image: "img/02.jpg",
    title: "Svizzera",
    text: "Lorem ipsum.",
  },
  {
    image: "img/03.jpg",
    title: "Gran Bretagna",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    image: "img/04.jpg",
    title: "Germania",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.",
  },
  {
    image: "img/05.jpg",
    title: "Paradise",
    text: "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.",
  },
];

/********* CODE MAIN ********/

/****** VUE JS ********/

//make connection with VUE

const app = new Vue({
  //first elements to bind
  el: "#app",

  //take the elements we need so the slides
  data: {
    //the array of objects
    slides,

    //we need to know when one slide is active so we gonna get the index
    // that at first we set to 0
    activeSlideIndex: 0,

    //make a var for a control of the autoplay
    control: true,
  },

  methods: {
    //show the previous slide
    showPrevSlide() {
      if (this.activeSlideIndex > 0) {
        this.activeSlideIndex--;
      } else {
        this.activeSlideIndex = this.slides.length - 1;
      }
    },

    //show the next slide
    showNextSlide() {
      if (this.activeSlideIndex < this.slides.length - 1) {
        this.activeSlideIndex++;
      } else {
        this.activeSlideIndex = 0;
      }
    },

    //check which slide is active
    checkIfActive(item) {
      const index = this.slides.findIndex(
        //function anonymous that take as argument an slide
        //findIndex take an element of the array (slides) and analyzed it
        //slide is an element of the array
        (slide) => {
          //we check by title the index of the currently active slide

          return slide.title === item.title;
        }
      );
      //in the thumb where we have set the activeSlideIndex we gonna put the class "thumb active" and in the others only "thumb"
      return index === this.activeSlideIndex ? "thumb active" : "thumb";
    },

    //set active a slide by click
    setActive(item) {
      this.activeSlideIndex = this.slides.findIndex(
        //function anonymous that take as argument an slide
        //findIndex take an element of the array (slides) and analyzed it
        //slide is an element of the array
        (slide) => {
          //we check by title the index of the currently active slide

          return slide.title === item.title;
        }
      );
    },

    //set an interval about 3s where the image change automatically
    autoPlay() {
      const timer = setInterval(this.increment, 3000);
    },

    //change the index of activeSlideIndex
    increment() {
      if (this.control) {
        if (this.activeSlideIndex === 4) {
          this.activeSlideIndex = 0;
        } else {
          console.log("incremento");
          this.activeSlideIndex++;
        }
      }
    },

    //block autoplay
    blockAutoplay() {
      this.control = false;
    },
    //restart autoplay
    restartAutoplay() {
      this.control = true;
    },
  },
});

/******* /VUE JS **********/
