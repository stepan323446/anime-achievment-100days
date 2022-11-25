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
    },
    {
        title: "Favorite Animal sidekick, pet or summoning from any anime",
        link: "https://anilist.co/activity/478226027",
        image: "images/challenge/15.jpg"
    },
    {
        title: "Anime with the best animation",
        link: "https://anilist.co/activity/478557312",
        image: "images/challenge/16.jpg"
    },
    {
        title: "Favorite supporting male anime character",
        link: "https://anilist.co/activity/478942417",
        image: "images/challenge/17.png"
    },
    {
        title: "Favorite supporting female anime character",
        link: "https://anilist.co/activity/479324943",
        image: "images/challenge/18.png"
    },
    {
        title: "Most epic scene ever",
        link: "https://anilist.co/activity/479714389",
        image: "images/challenge/19.jpg"
    },
    {
        title: "Anime character that gets on your nervers",
        link: "https://anilist.co/activity/480327407",
        image: "images/challenge/20.jpg"
    },
    {
        title: "Favorite goofy anime character",
        link: "https://anilist.co/activity/480610555",
        image: "images/challenge/21.png"
    },
    {
        title: "Favorite weapon, gear or armor used in an anime",
        link: "https://anilist.co/activity/480996817",
        image: "images/challenge/22.jpg"
    },
    {
        title: "Favorite attack someone used in an anime",
        link: "https://anilist.co/activity/481409842",
        image: "images/challenge/22.jpg"
    }
]


const itemsContainer = document.getElementById("challenge-items");
let items = [];
let hrBlocks = [];

for(let i = 0; i < listItems.length; i++){
    if((i % 10) == 0 && i != 0){
        let hrBlock = document.createElement("div");
        hrBlock.classList.add("hr-block");
        hrBlock.innerHTML = `<div>${i}+</div>`;

        hrBlocks.push(hrBlock);
        itemsContainer.append(hrBlock);
    }

    let item = document.createElement("a");
    item.classList.add("item");
    item.setAttribute("href", listItems[i].link);
    item.innerHTML = `
                    <div class="item-img">
                        <img src="${listItems[i].image}" alt="">
                    </div>
                    <div class="info">
                        <h3>${listItems[i].title}</h3>
                    </div>
                    <span>${i + 1} Day</span>
    `
    items.push({
        elem: item,
        searchText: `${listItems[i].title.toLowerCase()} - ${i + 1} day`,
        day: i + 1
    });
    itemsContainer.append(item);
}

// Поиск в реальном времени
let searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", function(e){

    // Отключить кнопки-сортировки
    daysSelectBtns.forEach(btn => {
        btn.classList.remove("selected");
    });
    daysSelectBtns[0].classList.add("selected");

    let value = e.currentTarget.value.toLowerCase();
    if(value == "")
    {
        items.forEach(element => {
            element.elem.classList.remove("hide");
        });
        isActiveHrBlocks(true);
        isActiveNothing(false);
        return;
    }
    isActiveHrBlocks(false);

    let founded = 0;
    items.forEach(element => {
        if(element.searchText.includes(value)){
            element.elem.classList.remove("hide");
            founded++;
        }
        else{
            element.elem.classList.add("hide");
        }
    });
    if(founded == 0)
        isActiveNothing(true);
    else
        isActiveNothing(false);
});


// Кнопки-сортировки по дням
let daysSelectBtns = document.querySelectorAll("#select-days .select");
daysSelectBtns.forEach(btn => {
    btn.addEventListener("click", function(e){
        let elem = e.currentTarget;

        // Если кнопка выбрана, то она активна и выделяется визуальна
        daysSelectBtns.forEach(btn => {
            btn.classList.remove("selected");
        });
        elem.classList.add("selected");


        // Получение от минимального числа дня до максимального
        let min = +elem.getAttribute("min-day");
        let max = +elem.getAttribute("max-day");

        let founded = 0;
        // Поиск тех дней, что нужны
        items.forEach(item => {
            if(min <= item.day && item.day <= max)
            {
                item.elem.classList.remove("hide");
                founded++;
            }
            else{
                item.elem.classList.add("hide");
            }
            // Если выбраны все дни, то возвращаем разделительные блоки, как и было раньше
            if(min == 1 && max == 100)
                isActiveHrBlocks(true);
            else
                isActiveHrBlocks(false);
        });
        if(founded == 0)
            isActiveNothing(true);
        else
            isActiveNothing(false);
    });
});

// Включить / Выключить разделительные блоки
function isActiveHrBlocks(isActive){
    if(isActive){
        hrBlocks.forEach(element => {
            element.classList.remove("hide");
        });
    }
    else{
        hrBlocks.forEach(element => {
            element.classList.add("hide");
        });
    }
    
}

// Активировать текст, если ничего не найдено
let nothing = document.getElementById("nothing-text");
nothing.textContent = `Unfortunately we didn't find anything. Most likely, you entered an invalid request or I have not completed this task yet (the maximum completed day is ${items.length})`
function isActiveNothing(isActive){
    if(isActive)
        nothing.classList.remove("hide");
    else
        nothing.classList.add("hide");
}