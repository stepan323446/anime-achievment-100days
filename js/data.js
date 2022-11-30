function getDataSteve() {
    // Статус пользователей другий челленджей
    const Status = {
        Complete: "complete",
        Current: "current",
        Failed: "failed"
    }

    // Создание объекта тайтла
    /////////////////////////////////////////////////////////
    class Title {
        id;
        title;
        count;
        isShowing;

        constructor(id, title) {
            this.id = id;
            this.title = title;
            this.count = 0;
            this.isShowing = false;
        }
    }

    let stevedekart = {
        otherUsers: [
            {
                nickname: "GHAUR1",
                image: "images/users/Ghaur1.png",
                url: "https://anilist.co/activity/474754966",
                status: Status.Complete
            },
            {
                nickname: "OskarL",
                image: "images/users/OskarL.jpg",
                url: "https://anilist.co/activity/478516794",
                status: Status.Complete
            },
            {
                nickname: "Karandi",
                image: "images/users/Karandi.webp",
                url: "https://100wordanime.blog/category/30-day-anime-challenge/",
                status: Status.Complete
            },
            {
                nickname: "CH1KIM0N1",
                image: "images/users/CH1KIM0N1.png",
                url: "https://ch1kim0n1.github.io/100DayChallenge_ch1kim0n1.github.io/",
                status: Status.Current
            },
            {
                nickname: "GreenDavid004",
                image: "images/users/david.jpg",
                url: "https://anilist.co/user/GreenDavid004/",
                status: Status.Current
            },
            {
                nickname: "Ani-Dotes",
                image: "images/users/dotes.jpg",
                url: "https://anidotesblog.wordpress.com/100-day-anime-challenge/",
                status: Status.Failed
            },
            {
                nickname: "Celestial Sparkles",
                image: "images/users/CelestialSparkles.png",
                url: "https://howanimestuffworks176744600.wordpress.com/category/anime-challenges-events/100-days-of-anime-challenge/",
                status: Status.Failed
            }
        ],
        listTitles: [
            new Title(0, "Sword Art Online"),
            new Title(1, "Ponyo"),
            new Title(2, "Weathering With You"),
            new Title(3, "A Silent Voice"),
            new Title(4, "86 - Eighty-six"),
            new Title(5, "Horimiya"),
            new Title(6, "Date A Live"),
            new Title(7, "Konosuba"),
            new Title(8, "Fullmetal Alchemist: Brotherhood"),
            new Title(9, "Yona of the Dawn"),
            new Title(10, "Attack on Titan"),
            new Title(11, "Violet Evergarden"),
            new Title(12, "You Shine in the Moonlit Night"),
            new Title(13, "Re:ZERO -Starting Life in Another World-"),
            new Title(14, "PSYCHO-PASS"),
            new Title(15, "That Time I Got Reincarnated as a Slime"),
            new Title(16, "Demon Slayer: Kimetsu no Yaiba"),
            new Title(17, "ERASED"),
            new Title(18, "No Game, No Life"),
        ],

        // Мой список
        /////////////////////////////////////////////////////////
        listItems: [
            {
                title: "Very first anime you watched",
                link: "https://anilist.co/activity/472252544",
                image: "images/challenge/1.jpg",
                content: [1]
            },
            {
                title: "Favorite anime you've watched so far",
                link: "https://anilist.co/activity/472554642",
                image: "images/challenge/2.jpg",
                content: [2, 3]
            },
            {
                title: "Favorite male anime character ever",
                link: "https://anilist.co/activity/472952368",
                image: "images/challenge/3.png",
                content: [4]
            },
            {
                title: "Favorite female anime character ever",
                link: "https://anilist.co/activity/473416431",
                image: "images/challenge/4.png",
                content: [5]
            },
            {
                title: "Anime you're ashamed you enjoyed",
                link: "https://anilist.co/activity/473961636",
                image: "images/challenge/5.jpg",
                content: [6, 7]
            }
            ,
            {
                title: "Anime you want to see but haven't yet",
                link: "https://anilist.co/activity/474424506",
                image: "images/challenge/6.jpg",
                content: [8]

            },
            {
                title: "Your anime crush",
                link: "https://anilist.co/activity/474806357",
                image: "images/challenge/NO.jpg",
            },
            {
                title: "Favorite anime couple",
                link: "https://anilist.co/activity/475161889",
                image: "images/challenge/7.webp",
                content: [5]
            },
            {
                title: "Best Anime Villian",
                link: "https://anilist.co/activity/475633964",
                image: "images/challenge/9.png",
                content: [9]
            },
            {
                title: "Favorite fighter anime",
                link: "https://anilist.co/activity/476003786",
                image: "images/challenge/10.jpg",
                content: [10]
            },
            {
                title: "Favorite mech anime",
                link: "https://anilist.co/activity/476382784",
                image: "images/challenge/11.jpg",
                content: [4]
            }
            ,
            {
                title: "Saddest anime scene",
                link: "https://anilist.co/activity/476902666",
                image: "images/challenge/12.jpg",
                content: [11]
            },
            {
                title: "Anime character you most similar to",
                link: "https://anilist.co/activity/477263410",
                image: "images/challenge/13.png",
                content: [5]
            },
            {
                title: "Saddest Anime Death",
                link: "https://anilist.co/activity/477793706",
                image: "images/challenge/14.jpg",
                content: [12]
            },
            {
                title: "Favorite Animal sidekick, pet or summoning from any anime",
                link: "https://anilist.co/activity/478226027",
                image: "images/challenge/15.jpg",
                content: [13]
            },
            {
                title: "Anime with the best animation",
                link: "https://anilist.co/activity/478557312",
                image: "images/challenge/16.jpg",
                content: [11]
            },
            {
                title: "Favorite supporting male anime character",
                link: "https://anilist.co/activity/478942417",
                image: "images/challenge/17.png",
                content: [14]
            },
            {
                title: "Favorite supporting female anime character",
                link: "https://anilist.co/activity/479324943",
                image: "images/challenge/18.png",
                content: [15]
            },
            {
                title: "Most epic scene ever",
                link: "https://anilist.co/activity/479714389",
                image: "images/challenge/19.jpg",
                content: [16]
            },
            {
                title: "Anime character that gets on your nervers",
                link: "https://anilist.co/activity/480327407",
                image: "images/challenge/20.jpg",
                content: [17]
            },
            {
                title: "Favorite goofy anime character",
                link: "https://anilist.co/activity/480610555",
                image: "images/challenge/21.png",
                content: [7]
            },
            {
                title: "Favorite weapon, gear or armor used in an anime",
                link: "https://anilist.co/activity/480996817",
                image: "images/challenge/22.jpg",
                content: [0]
            },
            {
                title: "Favorite attack someone used in an anime",
                link: "https://anilist.co/activity/481409842",
                image: "images/challenge/22.jpg",
                content: [0]
            },
            {
                title: "Moment that shoked you the most in any anime",
                link: "https://anilist.co/activity/481687733",
                image: "images/challenge/24.png",
                content: [14]
            },
            {
                title: "Anime that never gets old no matter how many times you've rewatched it",
                link: "https://anilist.co/activity/482325002",
                image: "images/challenge/22.jpg",
                content: [0, 18, 5, 10]
            },
            {
                title: "Best anime fight",
                link: "https://anilist.co/activity/482715319",
                image: "images/challenge/19.jpg",
                content: [16]
            },
            {
                title: "Most Badass Scene from Any Anime Character",
                link: "https://anilist.co/activity/483190778",
                image: "images/challenge/27.jpg",
                content: [18]
            }
        ]

    }

    return stevedekart;
}