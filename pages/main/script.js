
//// Info about pets
const petsInfo = [
{
  name: "Jennifer",
  img: "assets/images/pets-jennifer.png",
  type: "Dog",
  breed: "Labrador",
  description: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
  age: "2 months",
  inoculations: ["none"],
  diseases: ["none"],
  parasites: ["none"],
},

{
  name: "Sophia",
  img: "assets/images/pets-sophia.png",
  type: "Dog",
  breed: "Shih tzu",
  description: "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
  age: "1 month",
  inoculations: ["parvovirus"],
  diseases: ["none"],
  parasites: ["none"],
},

{
  name: "Woody",
  img: "assets/images/pets-woody.png",
  type: "Dog",
  breed: "Golden Retriever",
  description: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
  age: "3 years 6 months",
  inoculations: ["adenovirus", "distemper"],
  diseases: ["right back leg mobility reduced"],
  parasites: ["none"],
},

{
  name: "Scarlett",
  img: "assets/images/pets-scarlet.png",
  type: "Dog",
  breed: "Jack Russell Terrier",
  description: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
  age: "3 months",
  inoculations: ["parainfluenza"],
  diseases: ["none"],
  parasites: ["none"],
},

{
  name: "Katrine",
  img: "assets/images/pets-katrine.png",
  type: "Cat",
  breed: "British Shorthair",
  description: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
  age: "6 months",
  inoculations: ["panleukopenia"],
  diseases: ["none"],
  parasites: ["none"],
},

{
  name: "Timmy",
  img: "assets/images/pets-timmy.png",
  type: "Cat",
  breed: "British Shorthair",
  description: "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
  age: "2 years 3 months",
  inoculations: ["calicivirus", "viral rhinotracheitis"],
  diseases: ["kidney stones"],
  parasites: ["none"],
},

{
  name: "Freddie",
  img: "assets/images/pets-freddie.png",
  type: "Cat",
  breed: "British Shorthair",
  description: "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
  age: "2 months",
  inoculations: ["rabies"],
  diseases: ["none"],
  parasites: ["none"],
},

{
  name: "Charly",
  img: "assets/images/pets-charly.png",
  type: "Dog",
  breed: "Jack Russell Terrier",
  description: "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
  age: "8 years",
  inoculations: ["bordetella bronchiseptica", "leptospirosis"],
  diseases: ["deafness", "blindness"],
  parasites: ["lice", "fleas"],
}
];

//// Mobile menu
const burgers = document.querySelectorAll('.burger');
const mobileMenu = document.querySelector('.mobileMenu');
const mobileBurger = document.querySelector('.mobileMenu .burger');
const menuItems = document.querySelectorAll('.mobileMenu nav div');
const cover = document.querySelector('.cover');

function closeTheMenu() {
    cover.hidden = true;
    document.body.style.overflow = "";
    mobileBurger.classList.toggle('rotate');
    mobileMenu.classList.remove('move');
    mobileMenu.addEventListener('transitionend', function(event) {
        mobileMenu.style.display = 'none';
        mobileMenu.hidden = true;
    });
}

for (let burger of burgers) {
    burger.addEventListener('click', function() {
        if (mobileMenu.hidden) {
            mobileMenu.hidden = false;
            cover.hidden = false;
            document.body.style.overflow = "hidden";
            mobileMenu.style.display = 'flex';
            mobileMenu.classList.add('move');
            mobileBurger.classList.toggle('rotate');
        } else {
            closeTheMenu();
        }
    });
}
cover.addEventListener('click', closeTheMenu);

for (let item of menuItems) {
    item.addEventListener('click', closeTheMenu);
}

//// Pop up
const learnMoreButtons = document.querySelectorAll('.card button');
const popup = document.querySelector('div.popup');
const popImg = document.querySelector('.popup img');
const popCont = document.querySelector('.popup div');
const popH3 = document.querySelector('.popup h3');
const popH4 = document.querySelector('.popup h4');
const popH5 = document.querySelector('.popup div + h5');
const lis = document.querySelectorAll('.popup li');
const close = document.querySelector('button.close');

function openPopup() {
    popup.hidden = false;
    popup.style.display = 'flex';
    cover.hidden = false;
    document.body.style.overflow = "hidden";
    for (let i = 0; i < petsInfo.length; i++) {
      if (this.closest('.card').id === petsInfo[i].name) {
        popImg.setAttribute('src', petsInfo[i].img);
        popH3.append(petsInfo[i].name);
        popH4.append(petsInfo[i].type + ' - ' + petsInfo[i].breed);
        popH5.append(petsInfo[i].description);
        for (let li of lis) {
          if (li.id === 'age') {li.innerHTML = `<h5><b>Age: </b>${petsInfo[i].age}</h5>`;}
          if (li.id === 'inocul') {li.innerHTML = `<h5><b>Inoculations: </b>${petsInfo[i].inoculations}</h5>`;}
          if (li.id === 'disease') {li.innerHTML = `<h5><b>Diseases: </b>${petsInfo[i].diseases}</h5>`;}
          if (li.id === 'parasit') {li.innerHTML = `<h5><b>Parasites: </b>${petsInfo[i].parasites}</h5>`;}
        }
      }
    }
}

for (let learnMoreButton of learnMoreButtons) {
  learnMoreButton.addEventListener('click', openPopup);
}

function closePopup() {
    popup.hidden = true;
    popup.style.display = 'none';
    cover.hidden = true;
    document.body.style.overflow = "";
    popH3.innerText = '';
    popH4.innerText = '';
    popH5.innerText = '';
    for (let li of lis) {
      li.innerText = '';
    }
}

close.addEventListener('click', closePopup);
cover.addEventListener('click', closePopup);
  cover.addEventListener('mouseover', function() {
    close.classList.add('hover');
  });
  cover.addEventListener('mouseout', function() {
    close.classList.remove('hover');
  });


/// Carousel
const arrows = document.querySelectorAll('.our-friends .button_arrow');
const slider = document.querySelector('.our-friends .slider');
const cards = slider.querySelectorAll('.card');

const card1 = slider.querySelector('.card.n1');
const card2 = slider.querySelector('.card.n2');
const card3 = slider.querySelector('.card.n3');

const cardImg1 = slider.querySelector('.card.n1 img');
const cardImg2 = slider.querySelector('.card.n2 img');
const cardImg3 = slider.querySelector('.card.n3 img');

const cardName1 = slider.querySelector('.card.n1 h4');
const cardName2 = slider.querySelector('.card.n2 h4');
const cardName3 = slider.querySelector('.card.n3 h4');


function findSelected() {
  let selected = [];
  for (let i = 0; i < petsInfo.length; i++) {
    for (let card of cards) {
      if (card.innerText.includes(petsInfo[i].name)) {
        selected.push(i);
      }
    }
  }
  return selected;
}

function changeContent() {
  let arr = findSelected();
  let j = Math.floor(Math.random() * 8);
  let h = Math.floor(Math.random() * 8);
  let k = Math.floor(Math.random() * 8);

  for (let i = 0; i < arr.length; i++) {
    while (h === j || h === k || j === k || arr.includes(j) || arr.includes(h) || arr.includes(k)) {
      j = Math.floor(Math.random() * 8);
      h = Math.floor(Math.random() * 8);
      k = Math.floor(Math.random() * 8);
    }
  }
    cardName1.innerText = petsInfo[j].name;
    cardName2.innerText = petsInfo[h].name;
    cardName3.innerText = petsInfo[k].name;

    cardImg1.setAttribute('src', petsInfo[j].img);
    cardImg2.setAttribute('src', petsInfo[h].img);
    cardImg3.setAttribute('src', petsInfo[k].img);

    card1.id = petsInfo[j].name;
    card2.id = petsInfo[h].name;
    card3.id = petsInfo[k].name;
}

function switchTheSlider(event) {
  for (let card of cards) {
    if (event.target.classList.contains('right')) {
      card.style.position='relative';
      card.style.animation='switchRight 0.8s ease-out';

    } else if (event.target.classList.contains('left')) {
      card.style.position='relative';
      card.style.animation='switchLeft 0.8s ease-out';
    }
    card.addEventListener('animationend', function() {
      card.style.animation='';
    })
  }
}

for (let arrow of arrows) {
  arrow.addEventListener('click', changeContent);
  arrow.addEventListener('click', switchTheSlider);
}
