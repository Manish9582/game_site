const imgArr = [
    {
        'id': 1,
        'img': 'https://wallpapercave.com/wp/wp9036713.jpg',
        'heading': 'GALACTIC ODYSSEY',
        'title': 'Aute esse non magna elit dolore dolore dolor sit est. Ea occaecat ea duis laborum reprehenderit id cillum tempor cupidatat qui nisi proident nostrud dolore.',
        'price': 9.99,

    },
    {
        'id': 2,
        'img': 'https://wallpapers.com/images/high/best-3d-gaming-darksiders-2-character-6d95hcf6ddx3swve.webp',
        'heading': 'MYSTIC RACING',
        'title': 'Aute esse non magna elit dolore dolore dolor sit est. Ea occaecat ea duis laborum reprehenderit id cillum tempor cupidatat qui nisi proident nostrud dolore.',
        'price': 11.99,
    },
    {
        'id': 3,
        'img': 'https://wallpapers.com/images/high/best-3d-gaming-battlefield-4-character-sdimsbo0xxi9dpue.webp',
        'heading': 'SILENT WRATH',
        'title': 'Aute esse non magna elit dolore dolore dolor sit est. Ea occaecat ea duis laborum reprehenderit id cillum tempor cupidatat qui nisi proident nostrud dolore.',
        'price': 18.99,
    },
    {
        'id': 4,
        'img': 'https://wallpapers.com/images/high/best-3d-gaming-pubg-woman-character-d5jzrzvlm58k4nf5.webp',
        '': 'FUNK DUNGEON',
        'title': 'Aute esse non magna elit dolore dolore dolor sit est. Ea occaecat ea duis laborum reprehenderit id cillum tempor cupidatat qui nisi proident nostrud dolore.',
        'price': 15.99,
    }
]
// print images
const selectParentsClass = document.querySelector('.Wallpaper');
let stordata = imgArr.map((data) => {
    return `
            <div class='sliderImgPar'>
            <img src="${data.img}" alt="">
            <div class='Imgtitle'>
            <p class='Imgheading'><strong>${data.heading}</strong></p>
            <p class='imgTitle'>${data.title}</p>
            <p style='margin-top: 10px;'>Starting at<br></p>
            <p> $<strong class='pricerate'>${data.price}</strong> /monthly</p>
            <div class='ServerLink'>
             <a href=''>ORDER YOUR GAME SERVER NOW</a>
            </div> 
            </div>
            </div>
    `;
}).join('');
selectParentsClass.innerHTML = stordata;

// slider

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n)
}

function showSlides(n) {
    let slides = document.querySelectorAll(".sliderImgPar");
    if (n < 1) {
        slideIndex = slides.length;
    }
    if (n > slides.length) {
        slideIndex = 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = 'block'
}

const setionnav = [
    {
        'id': 1,
        'image': 'https://demo.bravisthemes.com/playhost/wp-content/uploads/2023/12/icon1.png',
        'heading': 'Super Quick Setup',
        'title': 'Dolor minim in pariatur in deserunt laboris eu pariatur labore excepteur cupidatat cupidatat duis dolor in.'
    },
    {
        'id': 2,
        'image': 'https://demo.bravisthemes.com/playhost/wp-content/uploads/2023/12/icon2.png',
        'heading': 'Premium Hardware',
        'title': 'Dolor minim in pariatur in deserunt laboris eu pariatur labore excepteur cupidatat cupidatat duis dolor in.'
    },
    {
        'id': 3,
        'image': 'https://demo.bravisthemes.com/playhost/wp-content/uploads/2023/12/icon3.png',
        'heading': 'DDos Protection',
        'title': 'Dolor minim in pariatur in deserunt laboris eu pariatur labore excepteur cupidatat cupidatat duis dolor in.'
    },
    {
        'id': 4,
        'image': 'https://demo.bravisthemes.com/playhost/wp-content/uploads/2023/12/icon4.png',
        'heading': 'Fast Support',
        'title': 'Dolor minim in pariatur in deserunt laboris eu pariatur labore excepteur cupidatat cupidatat duis dolor in.'
    }

]

let facilities = document.querySelector('.facilities');
let storfacili = setionnav.map((data, index) => {
    return `
   <div class='facilitiesList'>
   <div>
      <img src='${data.image}'>
    </div>
      <p><strong style='font-size:22px;padding:10px 0px;'>${data.heading}</strong></p>
      <p>${data.title}</p>
   </div>
 `;
}).join('');
facilities.innerHTML = storfacili;



let cardsImg = [
    {
        'id': 1,
        'image': 'https://demo.bravisthemes.com/playhost/wp-content/uploads/2024/06/home10-img4-301x401.webp',
        'title': 'Shadow of Night',
    },
    {
        'id': 2,
        'image': 'https://demo.bravisthemes.com/playhost/wp-content/uploads/2024/06/home10-img3-301x401.webp',
        'title': 'Alien Football',
    },
    {
        'id': 3,
        'image': 'https://demo.bravisthemes.com/playhost/wp-content/uploads/2024/06/home10-img2-301x401.webp',
        'title': 'Ancient Realms',
    },
    {
        'id': 4,
        'image': 'https://demo.bravisthemes.com/playhost/wp-content/uploads/2023/12/1-1-301x401.webp',
        'title': 'Thunder and city',
    },
    {
        'id': 5,
        'image': 'https://demo.bravisthemes.com/playhost/wp-content/uploads/2023/12/2-1-301x401.webp',
        'title': 'Mystic Racing Z',
    },
    {
        'id': 6,
        'image': 'https://demo.bravisthemes.com/playhost/wp-content/uploads/2023/12/3-1-301x401.webp',
        'title': 'Silent Wrath',
    },
    {
        'id': 7,
        'image': 'https://demo.bravisthemes.com/playhost/wp-content/uploads/2023/12/4-1-301x401.webp',
        'title': 'Funk Dungeon',
    },
    {
        'id': 8,
        'image': 'https://demo.bravisthemes.com/playhost/wp-content/uploads/2023/12/5-1-301x401.webp',
        'title': 'Galactic Odyssey',
    },
]

let card = document.querySelector('.card');
let storCards = cardsImg.map((data) => {
    return `
    <div class='CardList'>
        <div class='classImg'>
          <img src='${data.image}'>
        </div>
        <div class='cardTile'>
            <p>${data.title}</p>
            <p style='padding:10px 0px;'>Starting at  $14.99</p>
            <button><a href=''>Order Now</a></button>
        </div>
    </div>
    `;
}).join('');
card.innerHTML = storCards;

const Left = [
    {
        'id': 1,
        'question': 'What is game hosting?',
        'answer': 'Game hosting refers to the process of renting or setting up servers to run multiplayer online games. These servers allow players to connect and play together in the same game world.'
    },
    {
        'id': 2,
        'question': 'Why do I need game hosting?',
        'answer': 'Game hosting is essential for multiplayer gaming. It provides a dedicated server where players can join, ensuring a smooth and lag-free gaming experience. It also allows you to customize game settings and mods.'
    },
    {
        'id': 3,
        'question': 'How do I choose a game hosting provider?',
        'answer': 'Consider factors like server location, performance, scalability, customer support, and price when choosing a game hosting provider. Read reviews and ask for recommendations from fellow gamers.'
    },
    {
        'id': 4,
        'question': 'What types of games can I host?',
        'answer': 'You can host various types of games, including first-person shooters, role-playing games, survival games, strategy games, and more. The type of game hosting you need depends on the games requirements.'
    },
    {
        'id': 5,
        'question': 'What is server latency or ping?',
        'answer': 'Server latency or ping measures the time it takes for data to travel between your computer and the game server. Lower ping values indicate better responsiveness and less lag'
    },
    
]

let Question = document.querySelector('.Question1');
let storAns = Left.map((data) => {
    return `
    <div class='questionparents'>
        <div class='questionCon'>
          <div>
            ${data.question}
          </div>
          <div class='questionBtn'>
            <i class="fa-solid fa-chevron-down"></i>
          </div>
        </div>
        <div class='ans'>
        ${data.answer}
        </div>
    </div>
    `;
}).join('');
Question.innerHTML = storAns;

const right=[
{
    'id': 6,
    'question': 'How do I manage a game server?',
    'answer': 'Game server management varies depending on the hosting provider and game type. Typically, you ll have access to a control panel or command-line interface to configure settings, mods, and player access.'
},
{
    'id': 7,
    'question': 'Can I run mods on my game server?',
    'answer': 'Yes, many game hosting providers support mods. You can install and manage mods to enhance gameplay or customize the game to your liking.'
},
{
    'id': 8,
    'question': 'What is DDoS protection, and do I need it?',
    'answer': 'DDoS (Distributed Denial of Service) protection helps defend your game server from malicious attacks that could disrupt gameplay. It s essential for maintaining server stability, especially for popular games.'
},
{
    'id': 9,
    'question': 'How much does game hosting cost?',
    'answer': 'Game hosting costs vary depending on the provider, server type, and game. Prices can range from a few dollars per month for small servers to hundreds for high-performance dedicated servers.'
},
{
    'id': 10,
    'question': 'Is there 24/7 customer support?',
    'answer': 'Many reputable game hosting providers offer 24/7 customer support to assist with technical issues and server management.'
}
]
let Question1 = document.querySelector('.Question2');
let storAns2 = right.map((data) => {
    return `
    <div class='questionparents'>
        <div class='questionCon'>
          <div>
            ${data.question}
          </div>
          <div class='questionBtn'>
            <i class="fa-solid fa-chevron-down"></i>
          </div>
        </div>
        <div class='ans'>
        ${data.answer}
        </div>
    </div>
    `;
}).join('');
Question1.innerHTML = storAns2;



let showAnser = document.querySelectorAll('.questionBtn')
let ans = document.querySelectorAll('.ans')
console.log(showAnser)
showAnser.forEach((data, index) => {
    let frag = 1;
    showAnser[index].addEventListener('click', () => {
        if (frag) {
            ans[index].style.display = 'block'
            frag=0;
        }else{
            ans[index].style.display = 'none'
            frag=1;
        }
    })
})


const navBar = document.querySelector('.navBar');

// Listen for the scroll event
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navBar.classList.add('scrolled');
    } else {
        navBar.classList.remove('scrolled');
    }
});