function getDataSteve() {
    // Статус пользователей другий челленджей
    const Status = {
        Complete: "complete",
        Current: "current",
        Failed: "failed"
    }
    const Difficult = {
        none: 0,
        easy: 1,
        medium: 2,
        hard: 3
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
                url: "https://davidk004.github.io/100-day-challenge/",
                status: Status.Current
            },
            {
                nickname: "F41NZ",
                image: "images/users/F41NZ.jpg",
                url: "https://anilist.co/user/F41NZ/",
                status: Status.Current
            },
            {
                nickname: "BommieBomBom",
                image: "images/users/BommieBomBom.jpg",
                url: "https://anilist.co/user/BommieBomBom",
                status: Status.Current
            },
            {
                nickname: "sololol",
                image: "images/users/sololol.jpg",
                url: "https://anilist.co/user/sololol",
                status: Status.Current
            },
            {
                nickname: "RossyNarukami",
                image: "images/users/RossyHarukami.png",
                url: "https://anilist.co/user/RossyNarukami/",
                status: Status.Current
            },
            {
                nickname: "stephonee",
                image: "images/users/stephonee.png",
                url: "https://anilist.co/user/stephonee",
                status: Status.Current
            },
            {
                nickname: "bokut0",
                image: "images/users/bokut0.png",
                url: "https://anilist.co/user/bokut0",
                status: Status.Current
            },
            {
                nickname: "keiikeii",
                image: "images/users/keiikeii.png",
                url: "https://anilist.co/user/keiikeii/",
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
            new Title(19, "Toradora!"),
            new Title(20, "!_NO ANSWER FOR THIS QUESTION_!"),
            new Title(21, "Darling in the Franxx"),
            new Title(22, "BOCCHI THE ROCK!"),
            new Title(23, "Lycoris Recoil"),
            new Title(24, "Domestic Girlfriend"),
            new Title(25, "Your lie in April"),
            new Title(26, "Question not related to a specific title"),
            new Title(27, "Fate"),
            new Title(28, "Classroom of the Elite"),
            new Title(29, "Kaguya-sama: Love is War"),
            new Title(30, "Spice and Wolf"),
            new Title(31, "Your Name."),
            new Title(32, "I sold my life for ten thousand yen per year"),
            new Title(33, "Chihayafuru"),
            new Title(34, "The Eminence in Shadow"),
            new Title(35, "Chihayafuru"),
            new Title(36, "Spy x Family"),
            new Title(37, "BELLE"),
            new Title(38, "Snow White with the Red Hair"),
            new Title(39, "The Rising of the Shield Hero"),
            new Title(40, "Beyond the Boundary"),
            new Title(41, "Genshin")
        ],

        // Мой список
        /////////////////////////////////////////////////////////
        listItems: [
            {
                title: "Very first anime you watched",
                link: "https://anilist.co/activity/472252544",
                image: "images/challenge/1.jpg",
                content: [1],
                addSortTag: "xfsxasf", // Проверка, добавляет доп. условия поиска
                likes: 4,
                difficulty: Difficult.easy
            },
            {
                title: "Favorite anime you've watched so far",
                link: "https://anilist.co/activity/472554642",
                image: "images/challenge/2.jpg",
                content: [2, 3],
                likes: 3,
                difficulty: Difficult.easy
            },
            {
                title: "Favorite male anime character ever",
                link: "https://anilist.co/activity/472952368",
                image: "images/challenge/3.png",
                content: [4],
                likes: 6,
                difficulty: Difficult.medium
            },
            {
                title: "Favorite female anime character ever",
                link: "https://anilist.co/activity/473416431",
                image: "images/challenge/4.png",
                content: [5],
                likes: 6,
                difficulty: Difficult.easy
            },
            {
                title: "Anime you're ashamed you enjoyed",
                link: "https://anilist.co/activity/473961636",
                image: "images/challenge/5.jpg",
                content: [6, 7],
                likes: 5,
                difficulty: Difficult.easy
            },
            {
                title: "Anime you want to see but haven't yet",
                link: "https://anilist.co/activity/474424506",
                image: "images/challenge/6.jpg",
                content: [8],
                likes: 6,
                difficulty: Difficult.easy

            },
            {
                title: "Your anime crush",
                link: "https://anilist.co/activity/474806357",
                image: "images/challenge/NO.jpg",
                content: [20],
                likes: 5,
                difficulty: Difficult.none
            },
            {
                title: "Favorite anime couple",
                link: "https://anilist.co/activity/475161889",
                image: "images/challenge/7.webp",
                content: [5],
                likes: 3,
                difficulty: Difficult.easy
            },
            {
                title: "Best Anime Villian",
                link: "https://anilist.co/activity/475633964",
                image: "images/challenge/9.png",
                content: [9],
                likes: 7,
                difficulty: Difficult.medium
            },
            {
                title: "Favorite fighter anime",
                link: "https://anilist.co/activity/476003786",
                image: "images/challenge/10.jpg",
                content: [10],
                likes: 7,
                difficulty: Difficult.medium
            },
            {
                title: "Favorite mech anime",
                link: "https://anilist.co/activity/476382784",
                image: "images/challenge/11.jpg",
                content: [4],
                likes: 6,
                difficulty: Difficult.easy
            }
            ,
            {
                title: "Saddest anime scene",
                link: "https://anilist.co/activity/476902666",
                image: "images/challenge/12.jpg",
                content: [11],
                likes: 5,
                difficulty: Difficult.easy
            },
            {
                title: "Anime character you most similar to",
                link: "https://anilist.co/activity/477263410",
                image: "images/challenge/13.png",
                content: [5],
                likes: 5,
                difficulty: Difficult.easy
            },
            {
                title: "Saddest Anime Death",
                link: "https://anilist.co/activity/477793706",
                image: "images/challenge/14.jpg",
                content: [12],
                likes: 4,
                difficulty: Difficult.hard
            },
            {
                title: "Favorite Animal sidekick, pet or summoning from any anime",
                link: "https://anilist.co/activity/478226027",
                image: "images/challenge/15.jpg",
                content: [13],
                likes: 4,
                difficulty: Difficult.medium
            },
            {
                title: "Anime with the best animation",
                link: "https://anilist.co/activity/478557312",
                image: "images/challenge/16.jpg",
                content: [11],
                likes: 3,
                difficulty: Difficult.medium
            },
            {
                title: "Favorite supporting male anime character",
                link: "https://anilist.co/activity/478942417",
                image: "images/challenge/17.png",
                content: [14],
                likes: 5,
                difficulty: Difficult.medium
            },
            {
                title: "Favorite supporting female anime character",
                link: "https://anilist.co/activity/479324943",
                image: "images/challenge/18.png",
                content: [15],
                likes: 4,
                difficulty: Difficult.medium
            },
            {
                title: "Most epic scene ever",
                link: "https://anilist.co/activity/479714389",
                image: "images/challenge/19.jpg",
                content: [16],
                likes: 5,
                difficulty: Difficult.medium
            },
            {
                title: "Anime character that gets on your nervers",
                link: "https://anilist.co/activity/480327407",
                image: "images/challenge/20.jpg",
                content: [17],
                likes: 4,
                difficulty: Difficult.hard
            },
            {
                title: "Favorite goofy anime character",
                link: "https://anilist.co/activity/480610555",
                image: "images/challenge/21.png",
                content: [7],
                likes: 3,
                difficulty: Difficult.easy
            },
            {
                title: "Favorite weapon, gear or armor used in an anime",
                link: "https://anilist.co/activity/480996817",
                image: "images/challenge/22.jpg",
                content: [0],
                likes: 4,
                difficulty: Difficult.easy
            },
            {
                title: "Favorite attack someone used in an anime",
                link: "https://anilist.co/activity/481409842",
                image: "images/challenge/22.jpg",
                content: [0],
                likes: 4,
                difficulty: Difficult.medium
            },
            {
                title: "Moment that shoked you the most in any anime",
                link: "https://anilist.co/activity/481687733",
                image: "images/challenge/24.png",
                content: [14],
                likes: 6,
                difficulty: Difficult.hard
            },
            {
                title: "Anime that never gets old no matter how many times you've rewatched it",
                link: "https://anilist.co/activity/482325002",
                image: "images/challenge/22.jpg",
                content: [0, 18, 5, 10, 9],
                likes: 1,
                difficulty: Difficult.easy
            },
            {
                title: "Best anime fight",
                link: "https://anilist.co/activity/482715319",
                image: "images/challenge/19.jpg",
                content: [16],
                likes: 4,
                difficulty: Difficult.easy
            },
            {
                title: "Most Badass Scene from Any Anime Character",
                link: "https://anilist.co/activity/483190778",
                image: "images/challenge/27.jpg",
                content: [18],
                likes: 3,
                difficulty: Difficult.easy
            },
            {
                title: "Favorite quote from any anime character",
                link: "https://anilist.co/activity/483541396",
                image: "images/challenge/22.jpg",
                content: [0],
                likes: 3,
                difficulty: Difficult.medium
            },
            {
                title: "An anime you wished was real",
                link: "https://anilist.co/activity/483916617",
                image: "images/challenge/yona.webp",
                content: [5, 9],
                likes: 5,
                difficulty: Difficult.medium
            },
            {
                title: "An Anime You Wished Never Ended and Continued On",
                link: "https://anilist.co/activity/484253057",
                image: "images/challenge/27.jpg",
                content: [18],
                likes: 2,
                difficulty: Difficult.medium
            },
            {
                title: "Favorite anime OP",
                link: "https://anilist.co/activity/484759398",
                image: "images/challenge/toradora.jpg",
                content: [0, 19],
                likes: 4,
                difficulty: Difficult.medium
            },
            {
                title: "Which Anime Character would I want to be as best friend",
                link: "https://anilist.co/activity/485109068",
                image: "images/challenge/Vladilena.png",
                content: [4, 19],
                likes: 4,
                difficulty: Difficult.medium
            },
            {
                title: "Anime Character I Would Like to Cosplay As",
                link: "https://anilist.co/activity/485634245",
                image: "images/challenge/shinei-86.webp",
                content: [4],
                likes: 8,
                difficulty: Difficult.medium
            },
            {
                title: "What Anime Character Would be my Workout Buddy",
                link: "https://anilist.co/activity/486155884",
                image: "images/challenge/NO.jpg",
                content: [20],
                likes: 4,
                difficulty: Difficult.none
            },
            {
                title: "What Crossover I Would Like to See",
                link: "https://anilist.co/activity/486588791",
                image: "images/challenge/10.jpg",
                content: [10, 4],
                likes: 2,
                difficulty: Difficult.hard
            },
            {
                title: "Your first anime crush",
                link: "https://anilist.co/activity/486898673",
                image: "images/challenge/zero_two.jpg",
                content: [21],
                likes: 5,
                difficulty: Difficult.easy
            },
            {
                title: "Anime that changed you",
                link: "https://anilist.co/activity/487293734",
                image: "images/challenge/darlinginthefraxx.jpg",
                content: [21],
                likes: 7,
                difficulty: Difficult.medium
            },
            {
                title: "Do you like yaoi and/or yuri",
                link: "https://anilist.co/activity/487701683",
                image: "images/challenge/bocchitherock.jpg",
                content: [22],
                likes: 6,
                difficulty: Difficult.easy
            },
            {
                title: "Favorite music in anime",
                link: "https://anilist.co/activity/488090868",
                image: "images/challenge/11.jpg",
                content: [4, 10, 24, 25],
                likes: 8,
                difficulty: Difficult.hard
            },
            {
                title: "Favorite VA/Seiyuu",
                link: "https://anilist.co/activity/488747187",
                image: "images/challenge/Sharon.png",
                content: [26],
                addSortTag: "favorite voice actor anilibria sharon",
                likes: 4,
                difficulty: Difficult.easy
            },
            {
                title: "Anime character you hate",
                link: "https://anilist.co/activity/489109756",
                image: "images/challenge/Ryuunosuke.png",
                content: [27],
                likes: 7,
                difficulty: Difficult.easy
            },
            {
                title: "Most epic and shocking anime scene ever",
                link: "https://anilist.co/activity/489602357",
                image: "images/challenge/classroom.webp",
                content: [28],
                addSortTag: "Most epic or shocking anime scene ever",
                likes: 6,
                difficulty: Difficult.medium
            },
            {
                title: "Favorite canon couple",
                link: "https://anilist.co/activity/489873862",
                image: "images/challenge/7.webp",
                content: [5],
                likes: 10,
                difficulty: Difficult.easy
            },
            {
                title: "Who do you ship?",
                link: "https://anilist.co/activity/490371040",
                image: "images/anilist/ayanakodixkei.webp",
                content: [28],
                likes: 5,
                difficulty: Difficult.medium
            },
            {
                title: "Favorite anime ED",
                link: "https://anilist.co/activity/490617580",
                image: "images/challenge/kaguya.jpg",
                content: [29],
                likes: 5,
                difficulty: Difficult.easy
            },
            {
                title: "Guys, what's your favorite shoujo anime?",
                link: "https://anilist.co/activity/491126299",
                image: "images/challenge/yona.webp",
                content: [9],
                likes: 8,
                difficulty: Difficult.easy
            },
            {
                title: "Favorite tsundere",
                link: "https://anilist.co/activity/491562726",
                image: "images/challenge/tohsaka.png",
                content: [27],
                likes: 6,
                difficulty: Difficult.medium
            },
            {
                title: "Favorite harem/reverse harem",
                link: "https://anilist.co/activity/492172200",
                image: "images/challenge/5.jpg",
                content: [6, 9],
                likes: 5,
                difficulty: Difficult.easy
            },
            {
                title: "Subs or dubs",
                link: "https://anilist.co/activity/492644809",
                image: "images/challenge/anilibria.jpg",
                content: [26],
                likes: 7,
                difficulty: Difficult.easy
            },
            {
                title: "Favorite studio",
                link: "https://anilist.co/activity/492971116",
                image: "images/challenge/a1.png",
                content: [26],
                likes: 7,
                addSortTag: "Favorite studio ghibi work",
                difficulty: Difficult.medium
            },
            {
                title: "Share any experiences where you've been bullied or liking anime",
                link: "https://anilist.co/activity/493447812",
                image: "images/anilist/bulling.jpg",
                content: [26],
                likes: 7,
                difficulty: Difficult.easy
            },
            {
                title: "anime character you feel you are most like (or wish you were like)",
                link: "https://anilist.co/activity/493773283",
                image: "images/challenge/ryuuji.jpeg",
                content: [19],
                likes: 3,
                difficulty: Difficult.easy
            },
            {
                title: "An anime scene that made you cry",
                link: "https://anilist.co/activity/494247261",
                image: "images/challenge/yourlieinapril.jpg",
                content: [25],
                likes: 2,
                difficulty: Difficult.easy
            },
            {
                title: "recommend one anime that most people may not have seen",
                link: "https://anilist.co/activity/495029393",
                image: "images/challenge/spicexwolf.jpg",
                content: [30],
                likes: 5,
                difficulty: Difficult.easy
            },
            {
                title: "Do you share your anime interests with anyone",
                link: "https://anilist.co/activity/495302281",
                image: "images/challenge/NO.jpg",
                content: [26],
                likes: 3,
                difficulty: Difficult.easy
            },
            {
                title: "Your favorite character",
                link: "https://anilist.co/activity/495985453",
                image: "images/challenge/4.png",
                content: [5],
                likes: 5,
                difficulty: Difficult.easy
            },
            {
                title: "What anime has your heart",
                link: "https://anilist.co/activity/496483044",
                image: "images/challenge/yourname.jpg",
                content: [31],
                likes: 3,
                difficulty: Difficult.medium
            },
            {
                title: "What's your favorite hentai anime",
                link: "https://anilist.co/activity/497095532",
                image: "images/challenge/NO.jpg",
                content: [20],
                likes: 4,
                difficulty: Difficult.easy
            },
            {
                title: "What's your favorite yaoi anime",
                link: "https://anilist.co/activity/497589820",
                image: "images/challenge/NO.jpg",
                content: [20],
                likes: 3,
                difficulty: Difficult.easy
            },
            {
                title: "Wish that manga would turn into an anime",
                link: "https://anilist.co/activity/498063381",
                image: "images/challenge/yona.webp",
                content: [4, 9, 32],
                likes: 5,
                difficulty: Difficult.easy
            },
            {
                title: "What current anime are you watching",
                link: "https://anilist.co/activity/498553084",
                image: "images/challenge/eminence.jpg",
                content: [10, 33, 34],
                likes: 6,
                difficulty: Difficult.easy
            },
            {
                title: "Favorite anime movie",
                link: "https://anilist.co/activity/498553084",
                image: "images/challenge/asilentvoice.jpg",
                content: [2, 3],
                likes: 13,
                difficulty: Difficult.easy
            },
            {
                title: "Favorite shonen series",
                link: "https://anilist.co/activity/499536398",
                image: "images/challenge/10.jpg",
                content: [10],
                likes: 7,
                difficulty: Difficult.easy,
                addSortTag: "shounen"
            },
            {
                title: "Favorite shojo anime",
                link: "https://anilist.co/activity/500130920",
                image: "images/challenge/yona.webp",
                content: [9],
                likes: 7,
                difficulty: Difficult.easy,
                addSortTag: "shoujo"
            },
            {
                title: "A sports anime",
                link: "https://anilist.co/activity/500530327",
                image: "images/challenge/chihayafuru.webp",
                content: [35],
                likes: 3,
                difficulty: Difficult.easy
            },
            {
                title: "A slice of life anime",
                link: "https://anilist.co/activity/501047853",
                image: "images/challenge/7.webp",
                content: [5],
                likes: 7,
                difficulty: Difficult.easy
            },
            {
                title: "A comedy anime",
                link: "https://anilist.co/activity/501860556",
                image: "images/challenge/spyxfamily.jpg",
                content: [36],
                likes: 4,
                difficulty: Difficult.easy
            },
            {
                title: "A science fiction anime",
                link: "https://anilist.co/activity/502411973",
                image: "images/challenge/24.png",
                content: [14],
                likes: 6,
                difficulty: Difficult.easy,
                addSortTag: "A science fiction/mech anime"
            },
            {
                title: "An action anime",
                link: "https://anilist.co/activity/503001728",
                image: "images/challenge/10.jpg",
                content: [10],
                likes: 4,
                difficulty: Difficult.easy,
                addSortTag: "adventure"
            },
            {
                title: "A fantasy anime",
                link: "https://anilist.co/activity/503368721",
                image: "images/challenge/slime.jpg",
                content: [15],
                likes: 3,
                difficulty: Difficult.medium
            },
            {
                title: "A romance anime",
                link: "https://anilist.co/activity/503922761",
                image: "images/challenge/7.webp",
                content: [5],
                likes: 9,
                difficulty: Difficult.easy
            },
            {
                title: "An overrated series",
                link: "https://anilist.co/activity/504389735",
                image: "images/challenge/redhair.jpg",
                content: [37, 38],
                likes: 4,
                difficulty: Difficult.easy
            },
            {
                title: "An underrated series",
                link: "https://anilist.co/activity/504810979",
                image: "images/challenge/22.jpg",
                content: [0, 39],
                likes: 7,
                difficulty: Difficult.easy
            },
            {
                title: "That series that got you into anime",
                link: "https://anilist.co/activity/505267931",
                image: "images/challenge/darlinginthefraxx.jpg",
                content: [21],
                likes: 7,
                difficulty: Difficult.easy
            },
            {
                title: "Favorite friendship",
                link: "https://anilist.co/activity/505970517",
                image: "images/challenge/22.jpg",
                content: [0],
                likes: 8,
                difficulty: Difficult.hard
            },
            {
                title: "Favorite bromance",
                link: "https://anilist.co/activity/506455700",
                image: "images/challenge/NO.jpg",
                content: [20],
                likes: 4,
                difficulty: Difficult.easy
            },
            {
                title: "Favorite rivalry",
                link: "https://anilist.co/activity/506887158",
                image: "images/anilist/makishima.jpg",
                content: [14],
                likes: 9,
                difficulty: Difficult.medium
            },
            {
                title: "Favorite team",
                link: "https://anilist.co/activity/507425414",
                image: "images/challenge/27.jpg",
                content: [18],
                likes: 4,
                difficulty: Difficult.medium
            },
            {
                title: "Favorite quote",
                link: "https://anilist.co/activity/507766070",
                image: "images/challenge/spicexwolf.jpg",
                content: [0, 30],
                likes: 8,
                difficulty: Difficult.medium
            },
            {
                title: "Favorite scene",
                link: "https://anilist.co/activity/508111705",
                image: "images/challenge/yourname.jpg",
                content: [31],
                likes: 5,
                difficulty: Difficult.medium
            },
            {
                title: "Favorite episode",
                link: "https://anilist.co/activity/508872500",
                image: "images/challenge/22.jpg",
                content: [0],
                likes: 6,
                difficulty: Difficult.easy
            },
            {
                title: "Most annoying anime character",
                link: "https://anilist.co/activity/509380859",
                image: "images/challenge/mirai.png",
                content: [40],
                likes: 6,
                difficulty: Difficult.easy
            },
            {
                title: "An ecchi picture from your favorite series",
                link: "https://anilist.co/activity/509842804",
                image: "images/challenge/kaguya.jpg",
                content: [29],
                likes: 5,
                difficulty: Difficult.easy
            },
            {
                title: "Most recent anime wallpaper",
                link: "https://anilist.co/activity/510317799",
                image: "images/challenge/genshin.jpg",
                content: [41],
                likes: 6,
                difficulty: Difficult.easy
            },
            {
                title: "Favorite shoujo anime",
                link: "https://anilist.co/activity/510831874",
                image: "images/challenge/yona.webp",
                content: [9],
                likes: 9,
                difficulty: Difficult.easy
            },
            {
                title: "Best yandere character",
                link: "https://anilist.co/activity/511130463",
                image: "images/challenge/kurumi.jpg",
                content: [6],
                likes: 8,
                difficulty: Difficult.easy
            },
            {
                title: "Favorite anime hero",
                link: "https://anilist.co/activity/511478291",
                image: "images/challenge/rimuru.png",
                content: [15],
                likes: 3,
                difficulty: Difficult.easy
            },
            {
                title: "Favorite school uniform",
                link: "https://anilist.co/activity/512115945",
                image: "images/challenge/classroom.webp",
                content: [28],
                likes: 7,
                difficulty: Difficult.hard
            },
            {
                title: "Favorite anime opening theme song",
                link: "https://anilist.co/activity/512667318",
                image: "images/challenge/domestic.jpg",
                content: [24],
                likes: 11,
                difficulty: Difficult.easy
            },
            {
                title: "Picture of a character in a swimsuit",
                link: "https://anilist.co/activity/513187019",
                image: "images/challenge/ami.png",
                content: [19],
                likes: 0,
                difficulty: Difficult.hard
            }
        ]

    }

    return stevedekart;
}