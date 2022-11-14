
//// Info about pets
const petsInfo = [
  {
    name: "Katrine",
    img: "../../assets/images/pets-katrine.png",
    type: "Cat",
    breed: "British Shorthair",
    description: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "6 months",
    inoculations: ["panleukopenia"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Jennifer",
    img: "../../assets/images/pets-jennifer.png",
    type: "Dog",
    breed: "Labrador",
    description: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: ["none"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Woody",
    img: "../../assets/images/pets-woody.png",
    type: "Dog",
    breed: "Golden Retriever",
    description: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: ["adenovirus", "distemper"],
    diseases: ["right back leg mobility reduced"],
    parasites: ["none"],
  },
  {
    name: "Sophia",
    img: "../../assets/images/pets-sophia.png",
    type: "Dog",
    breed: "Shih tzu",
    description: "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "1 month",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Timmy",
    img: "../../assets/images/pets-timmy.png",
    type: "Cat",
    breed: "British Shorthair",
    description: "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: ["calicivirus", "viral rhinotracheitis"],
    diseases: ["kidney stones"],
    parasites: ["none"],
  },
  {
    name: "Charly",
    img: "../../assets/images/pets-charly.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description: "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: ["bordetella bronchiseptica", "leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"],
  },
  {
    name: "Scarlett",
    img: "../../assets/images/pets-scarlet.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: ["parainfluenza"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Freddie",
    img: "../../assets/images/pets-freddie.png",
    type: "Cat",
    breed: "British Shorthair",
    description: "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: ["rabies"],
    diseases: ["none"],
    parasites: ["none"],
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

/// Pagination

// Create pseudo-random array
function createPaginationArr() {
  const maxPetsInfo = petsInfo.slice();
  let num = -2;
  for (let i = 0; maxPetsInfo.length < 12; i++) {
    let newItem = petsInfo[Math.floor(Math.random() * 6)];
    if (!maxPetsInfo.slice(num).includes(newItem)) {
      maxPetsInfo.push(newItem);
      num--;
    }
  }
  num = -4;
  for (let i = 0; maxPetsInfo.length < 16; i++) {
    let newItem = petsInfo[Math.floor(Math.random() * 8)];
    if (!maxPetsInfo.slice(num).includes(newItem)) {
      maxPetsInfo.push(newItem);
      num--;
    }
  }
  num = -4;
  for (let i = 0; maxPetsInfo.length < 18; i++) {
    let newItem = petsInfo[Math.floor(Math.random() * 8)];
    if (!maxPetsInfo.slice(num).includes(newItem)) {
      maxPetsInfo.push(newItem);
      num--;
    }
  }
  num = -2;
  for (let i = 0; maxPetsInfo.length < 24; i++) {
    let newItem = petsInfo[Math.floor(Math.random() * 8)];
    if (!maxPetsInfo.slice(num).includes(newItem)) {
      maxPetsInfo.push(newItem);
      num--;
    }
  }
  let newI = petsInfo[Math.floor(Math.random() * 8)];
  maxPetsInfo.push(newI);
  num = -1;
  for (let i = 0; maxPetsInfo.length < 32; i++) {
    let newItem = petsInfo[Math.floor(Math.random() * 8)];
    if (!maxPetsInfo.slice(num).includes(newItem)) {
      maxPetsInfo.push(newItem);
      num--;
    }
  }
  num = -2;
  for (let i = 0; maxPetsInfo.length < 36; i++) {
    let newItem = petsInfo[Math.floor(Math.random() * 8)];
    if (!maxPetsInfo.slice(num).includes(newItem)) {
      maxPetsInfo.push(newItem);
      num--;
    }
  }
  num = -4;
  for (let i = 0; maxPetsInfo.length < 40; i++) {
    let newItem = petsInfo[Math.floor(Math.random() * 8)];
    if (!maxPetsInfo.slice(num).includes(newItem)) {
      maxPetsInfo.push(newItem);
      num--;
    }
  }
  num = -4;
  for (let i = 0; maxPetsInfo.length < 42; i++) {
    let newItem = petsInfo[Math.floor(Math.random() * 8)];
    if (!maxPetsInfo.slice(num).includes(newItem)) {
      maxPetsInfo.push(newItem);
      num--;
    }
  }
  num = -2;
  for (let i = 0; maxPetsInfo.length < 48; i++) {
    let newItem = petsInfo[Math.floor(Math.random() * 8)];
    if (!maxPetsInfo.slice(num).includes(newItem)) {
      maxPetsInfo.push(newItem);
      num--;
    }
  }
  return maxPetsInfo;
}

const maxPetsArr = createPaginationArr();
const slider = document.querySelector('.slider');
const cards = document.querySelectorAll('.card');
const cardImages = document.querySelectorAll('.card img');
const cardNames = document.querySelectorAll('.card h4');

const card1 = document.querySelector('.card.n1');
const card2 = document.querySelector('.card.n2');
const card3 = document.querySelector('.card.n3');
const card4 = document.querySelector('.card.n4');
const card5 = document.querySelector('.card.n5');
const card6 = document.querySelector('.card.n6');
const card7 = document.querySelector('.card.n7');
const card8 = document.querySelector('.card.n8');

const cardImg1 = document.querySelector('.card.n1 img');
const cardImg2 = document.querySelector('.card.n2 img');
const cardImg3 = document.querySelector('.card.n3 img');
const cardImg4 = document.querySelector('.card.n4 img');
const cardImg5 = document.querySelector('.card.n5 img');
const cardImg6 = document.querySelector('.card.n6 img');
const cardImg7 = document.querySelector('.card.n7 img');
const cardImg8 = document.querySelector('.card.n8 img');

const cardName1 = document.querySelector('.card.n1 h4');
const cardName2 = document.querySelector('.card.n2 h4');
const cardName3 = document.querySelector('.card.n3 h4');
const cardName4 = document.querySelector('.card.n4 h4');
const cardName5 = document.querySelector('.card.n5 h4');
const cardName6 = document.querySelector('.card.n6 h4');
const cardName7 = document.querySelector('.card.n7 h4');
const cardName8 = document.querySelector('.card.n8 h4');


const pageN = document.querySelector('.button.page');
const arrows = document.querySelectorAll('.button.arr');
const left = document.querySelector('.button.left');
const farLeft = document.querySelector('.button.farLeft');
const right = document.querySelector('.button.right');
const farRight = document.querySelector('.button.farRight');



function fadeContent() {
  if (!this.classList.contains("disabled")) {
      for (let card of cards) {
        card.style.animation='fadeTheContent 0.5s ease-out';
        card.addEventListener('animationend', function() {
          card.style.animation='';
        })
      }
  }
}

function changePageNumber() {
  if (!this.classList.contains("disabled")) {
    let N = pageN.innerText;

    if (this === left && N > 1) {N--;}
    if (this === farLeft) {N = 1;}
    if (this === right) {
      if (screen.width >= 1280 && N < 6) {N++;}
      if (screen.width < 1280 && screen.width >= 768 && N < 8) {N++;}
      if (screen.width < 768 && N < 16) {N++;}
    }
    if (this === farRight) {
      if (screen.width >= 1280) {N = 6;}
      if (screen.width < 1280 && screen.width >= 768) {N = 8;}
      if (screen.width < 768) {N = 16;}
    }

    if (N <= 1) {
      left.classList.add('disabled');
      farLeft.classList.add('disabled');
    }
    if (N > 1) {
      left.classList.remove('disabled');
      farLeft.classList.remove('disabled');
    }
    if (screen.width >= 1280 && N >= 6 || screen.width < 1280 && screen.width >= 768 && N >= 8 || screen.width < 768 && N >= 16) {
      right.classList.add('disabled');
      farRight.classList.add('disabled');
    }
    if (screen.width >= 1280 && N < 6 || screen.width < 1280 && screen.width >= 768 && N < 8 || screen.width < 768 && N < 16) {
      right.classList.remove('disabled');
      farRight.classList.remove('disabled');
    }
    pageN.innerText = N;
  }
}

function changeContent() {
  if (screen.width >= 1280) {
      let j;
      if (pageN.innerText == 1) {j = 0;}
      if (pageN.innerText == 2) {j = 8;}
      if (pageN.innerText == 3) {j = 16;}
      if (pageN.innerText == 4) {j = 24;}
      if (pageN.innerText == 5) {j = 32;}
      if (pageN.innerText == 6) {j = 40;}

      cardName1.innerText = maxPetsArr[0+j].name;
      cardName2.innerText = maxPetsArr[1+j].name;
      cardName3.innerText = maxPetsArr[2+j].name;
      cardName4.innerText = maxPetsArr[3+j].name;
      cardName5.innerText = maxPetsArr[4+j].name;
      cardName6.innerText = maxPetsArr[5+j].name;
      cardName7.innerText = maxPetsArr[6+j].name;
      cardName8.innerText = maxPetsArr[7+j].name;

      cardImg1.setAttribute('src', maxPetsArr[0+j].img);
      cardImg2.setAttribute('src', maxPetsArr[1+j].img);
      cardImg3.setAttribute('src', maxPetsArr[2+j].img);
      cardImg4.setAttribute('src', maxPetsArr[3+j].img);
      cardImg5.setAttribute('src', maxPetsArr[4+j].img);
      cardImg6.setAttribute('src', maxPetsArr[5+j].img);
      cardImg7.setAttribute('src', maxPetsArr[6+j].img);
      cardImg8.setAttribute('src', maxPetsArr[7+j].img);

      card1.id = maxPetsArr[0+j].name;
      card2.id = maxPetsArr[1+j].name;
      card3.id = maxPetsArr[2+j].name;
      card4.id = maxPetsArr[3+j].name;
      card5.id = maxPetsArr[4+j].name;
      card6.id = maxPetsArr[5+j].name;
      card7.id = maxPetsArr[6+j].name;
      card8.id = maxPetsArr[7+j].name;
  }

  if (screen.width < 1280 && screen.width >= 768) {
    let j;
    if (pageN.innerText == 1) {j = 0;}
    if (pageN.innerText == 2) {j = 6;}
    if (pageN.innerText == 3) {j = 12;}
    if (pageN.innerText == 4) {j = 18;}
    if (pageN.innerText == 5) {j = 24;}
    if (pageN.innerText == 6) {j = 30;}
    if (pageN.innerText == 7) {j = 36;}
    if (pageN.innerText == 8) {j = 42;}

    cardName1.innerText = maxPetsArr[0+j].name;
    cardName2.innerText = maxPetsArr[1+j].name;
    cardName3.innerText = maxPetsArr[2+j].name;
    cardName4.innerText = maxPetsArr[3+j].name;
    cardName5.innerText = maxPetsArr[4+j].name;
    cardName6.innerText = maxPetsArr[5+j].name;

    cardImg1.setAttribute('src', maxPetsArr[0+j].img);
    cardImg2.setAttribute('src', maxPetsArr[1+j].img);
    cardImg3.setAttribute('src', maxPetsArr[2+j].img);
    cardImg4.setAttribute('src', maxPetsArr[3+j].img);
    cardImg5.setAttribute('src', maxPetsArr[4+j].img);
    cardImg6.setAttribute('src', maxPetsArr[5+j].img);

    card1.id = maxPetsArr[0+j].name;
    card2.id = maxPetsArr[1+j].name;
    card3.id = maxPetsArr[2+j].name;
    card4.id = maxPetsArr[3+j].name;
    card5.id = maxPetsArr[4+j].name;
    card6.id = maxPetsArr[5+j].name;
  }

  if (screen.width < 768) {
    let j;
    if (pageN.innerText == 1) {j = 0;}
    if (pageN.innerText == 2) {j = 3;}
    if (pageN.innerText == 3) {j = 6;}
    if (pageN.innerText == 4) {j = 9;}
    if (pageN.innerText == 5) {j = 12;}
    if (pageN.innerText == 6) {j = 15;}
    if (pageN.innerText == 7) {j = 18;}
    if (pageN.innerText == 8) {j = 21;}
    if (pageN.innerText == 9) {j = 24;}
    if (pageN.innerText == 10) {j = 27;}
    if (pageN.innerText == 11) {j = 30;}
    if (pageN.innerText == 12) {j = 33;}
    if (pageN.innerText == 13) {j = 36;}
    if (pageN.innerText == 14) {j = 39;}
    if (pageN.innerText == 15) {j = 42;}
    if (pageN.innerText == 16) {j = 45;}

    cardName1.innerText = maxPetsArr[0+j].name;
    cardName2.innerText = maxPetsArr[1+j].name;
    cardName3.innerText = maxPetsArr[2+j].name;

    cardImg1.setAttribute('src', maxPetsArr[0+j].img);
    cardImg2.setAttribute('src', maxPetsArr[1+j].img);
    cardImg3.setAttribute('src', maxPetsArr[2+j].img);

    card1.id = maxPetsArr[0+j].name;
    card2.id = maxPetsArr[1+j].name;
    card3.id = maxPetsArr[2+j].name;
  }
}

for (let arrow of arrows) {
  arrow.addEventListener('click', fadeContent);
  arrow.addEventListener('click', changePageNumber);
  arrow.addEventListener('click', changeContent);
}
