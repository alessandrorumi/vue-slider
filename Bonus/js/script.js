// Partendo dallo starter pack dello zip che vi passo, rifare lo slider ma questa volta usando Vue.

const { createApp } = Vue;

createApp({

  data() {

    return {
        imageActive: 0,
        slides:
            
        [
            {
                image: 'img/01.webp',
                title: 'Marvel\'s Spiderman Miles Morales',
                text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
            }, 
            {
                image: 'img/02.webp',
                title: 'Ratchet & Clank: Rift Apart',
                text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
            }, 
            {
                image: 'img/03.webp',
                title: 'Fortnite',
                text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
            }, 
            {
                image: 'img/04.webp',
                title: 'Stray',
                text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
            }, 
            {
                image: 'img/05.webp',
                title: "Marvel's Avengers",
                text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
            }
        ]

    }

  },

  mounted() {
    // Avvia il timer al momento del montaggio del componente
    this.timer = setInterval(this.changeImage, 3000);
  },

  methods: {

    prevImg() {
        this.imageActive--;
        if (this.imageActive < 0) {
            this.imageActive =  this.slides.length - 1;
        }
    },

    nextImg() {
        this.imageActive++;
        if (this.imageActive >  this.slides.length - 1) {
            this.imageActive = 0;
        }
    },

    thumbToImg(index) {
        // console.log(`Hai cliccato sulla img ${index + 1}`);
        this.imageActive = index;
    },

    changeImage() {
        // console.log('Ogni 3 secondi');
        this.imageActive++;
        if (this.imageActive >  this.slides.length - 1) {
            this.imageActive = 0;
        }
    },

    stopCarousel() {
        clearInterval(this.timer);
    },

    restartCarousel() {
        this.timer = setInterval(this.changeImage, 3000);
    }

  }

}).mount('#app')
