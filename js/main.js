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
    }
]

const itemsContainer = document.getElementById("challenge-items");

for(let i = 0; i < listItems.length; i++){
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