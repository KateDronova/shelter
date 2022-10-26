const Jennifer = {
  "name": "Jennifer",
  "img": "../../assets/images/jennifer.png",
  "type": "Dog",
  "breed": "Labrador",
  "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
  "age": "2 months",
  "inoculations": ["none"],
  "diseases": ["none"],
  "parasites": ["none"]
}

const Sophia = {
  "name": "Sophia",
  "img": "../../assets/images/sophia.png",
  "type": "Dog",
  "breed": "Shih tzu",
  "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
  "age": "1 month",
  "inoculations": ["parvovirus"],
  "diseases": ["none"],
  "parasites": ["none"]
}

const Woody = {
  "name": "Woody",
  "img": "../../assets/images/woody.png",
  "type": "Dog",
  "breed": "Golden Retriever",
  "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
  "age": "3 years 6 months",
  "inoculations": ["adenovirus", "distemper"],
  "diseases": ["right back leg mobility reduced"],
  "parasites": ["none"]
}

const Scarlett = {
  "name": "Scarlett",
  "img": "../../assets/images/scarlett.png",
  "type": "Dog",
  "breed": "Jack Russell Terrier",
  "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
  "age": "3 months",
  "inoculations": ["parainfluenza"],
  "diseases": ["none"],
  "parasites": ["none"]
}

const Katrine = {
  "name": "Katrine",
  "img": "../../assets/images/katrine.png",
  "type": "Cat",
  "breed": "British Shorthair",
  "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
  "age": "6 months",
  "inoculations": ["panleukopenia"],
  "diseases": ["none"],
  "parasites": ["none"]
}

const Timmy = {
  "name": "Timmy",
  "img": "../../assets/images/timmy.png",
  "type": "Cat",
  "breed": "British Shorthair",
  "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
  "age": "2 years 3 months",
  "inoculations": ["calicivirus", "viral rhinotracheitis"],
  "diseases": ["kidney stones"],
  "parasites": ["none"]
}

const Freddie = {
  "name": "Freddie",
  "img": "../../assets/images/freddie.png",
  "type": "Cat",
  "breed": "British Shorthair",
  "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
  "age": "2 months",
  "inoculations": ["rabies"],
  "diseases": ["none"],
  "parasites": ["none"]
}

const Charly = {
  "name": "Charly",
  "img": "../../assets/images/charly.png",
  "type": "Dog",
  "breed": "Jack Russell Terrier",
  "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
  "age": "8 years",
  "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
  "diseases": ["deafness", "blindness"],
  "parasites": ["lice", "fleas"]
}

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
        mobileMenu.setAttribute('display','none');
        mobileMenu.hidden = true;
    });
}

for (let burger of burgers) {
    burger.addEventListener('click', function() {
        if (mobileMenu.hidden) {
            mobileMenu.hidden = false;
            cover.hidden = false;
            document.body.style.overflow = "hidden";
            mobileMenu.setAttribute('display','block');
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

const learnMoreButtons = document.querySelectorAll('.card button');
const popup = document.querySelector('div.popup');
const popImg = document.querySelector('.popup img');
const popCont = document.querySelector('.popup div');
const popH3 = document.querySelector('.popup h3');
const popH4 = document.querySelector('.popup h4');
const popH5 = document.querySelector('h4 + h5');
const close = document.querySelector('button.close');

function openPopup() {
    popup.hidden = false;
    cover.hidden = false;
    document.body.style.overflow = "hidden";
    popImg.setAttribute('src', '');
    popH3.append(this.closest('.card').id);
    popH4.append(this.closest('.card').id[type] + '-' + this.closest('.card').id[breed]);
    popH5.append(this.closest('.card').id[description]);
}

function closePopup() {
    popup.hidden = true;
    cover.hidden = true;
    document.body.style.overflow = "";
    popH3.innerText = '';
    popH4.innerText = '';
    popH5.innerText = '';
}

cover.addEventListener('click', closePopup);
close.addEventListener('click', closePopup);

for (let learnMoreButton of learnMoreButtons) {
    learnMoreButton.addEventListener('click', openPopup);
}