let listItems = [
    {
        title: "Very first anime you watched",
        link: "https://anilist.co/activity/472252544",
        image: "images/challenge/1.jpg"
    },
    {
        title: "Favorite anime you've watched so far",
        link: "https://anilist.co/activity/472554642",
        image: "images/challenge/2.jpg"
    },
    {
        title: "Favorite male anime character ever",
        link: "https://anilist.co/activity/472952368",
        image: "images/challenge/3.png"
    },
    {
        title: "Favorite female anime character ever",
        link: "https://anilist.co/activity/473416431",
        image: "images/challenge/4.png"
    },
    {
        title: "Anime you're ashamed you enjoyed",
        link: "https://anilist.co/activity/473961636",
        image: "images/challenge/5.jpg"
    }
    ,
    {
        title: "Anime you want to see but haven't yet",
        link: "https://anilist.co/activity/474424506",
        image: "images/challenge/6.jpg"
    }
    ,
    {
        title: "Your anime crush",
        link: "https://anilist.co/activity/474806357",
        image: "images/challenge/NO.jpg"
    },
    {
        title: "Favorite anime couple",
        link: "https://anilist.co/activity/475161889",
        image: "images/challenge/7.webp"
    },
    {
        title: "Best Anime Villian",
        link: "https://anilist.co/activity/475633964",
        image: "images/challenge/9.png"
    },
    {
        title: "Favorite fighter anime",
        link: "https://anilist.co/activity/476003786",
        image: "images/challenge/10.jpg"
    },
    {
        title: "Favorite mech anime",
        link: "https://anilist.co/activity/476382784",
        image: "images/challenge/11.jpg"
    }
    ,
    {
        title: "Saddest anime scene",
        link: "https://anilist.co/activity/476902666",
        image: "images/challenge/12.jpg"
    },
    {
        title: "Anime character you most similar to",
        link: "https://anilist.co/activity/477263410",
        image: "images/challenge/13.png"
    },
    {
        title: "Saddest Anime Death",
        link: "https://anilist.co/activity/477793706",
        image: "images/challenge/14.jpg"
    }
]

const itemsContainer = document.getElementById("challenge-items");

for(let i = 0; i < listItems.length; i++){
    if((i % 10) == 0 && i != 0){
        itemsContainer.innerHTML += `<div class="hr-block"><div>${i}+</div></div>`;
    }

    itemsContainer.innerHTML += `
                <a href="${listItems[i].link}" class="item">
                    <div class="item-img">
                        <img src="${listItems[i].image}" alt="">
                    </div>
                    <div class="info">
                        <h3>${listItems[i].title}</h3>
                    </div>
                    <span>${i + 1} Day</span>
                </a>
    `;   
}