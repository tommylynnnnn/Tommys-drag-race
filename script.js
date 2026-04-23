// ====== DATA ======
// ===== DOUBLE PREMIERE STATE =====
let premiereType = "normal";
let premiereGroups = null;       // [group1, group2]
let currentPremiereIndex = 0;    // 0 = first premiere, 1 = second
let selectedPremiereType = "normal";
let selectedFinaleType = "top3";

const ALL_QUEENS = [
    {
        name: "Alaska",
        img: "https://i.pinimg.com/736x/6e/ef/ca/6eefcadaa26067a62884227350d683b8.jpg",
        stats: { acting: 13, comedy: 13, improv: 13, dance: 11, design: 9, lipsync: 12 }
    },
    {
        name: "Alyssa Edwards",
        img: "https://i.pinimg.com/736x/0b/bd/51/0bbd517dfcbcb21aacb0fa05f0af9809.jpg",
        stats: { acting: 9, comedy: 10, improv: 10, dance: 12, design: 9, lipsync: 12 }
    },
    {
        name: "Bob the Drag Queen",
        img: "https://i.pinimg.com/736x/71/19/5a/71195a08be0d3a56bad3427f517901e4.jpg",
        stats: { acting: 13, comedy: 15, improv: 14, dance: 11, design: 7, lipsync: 10 }
    },
    {
        name: "Katya",
        img: "https://i.pinimg.com/736x/e9/0f/f6/e90ff66a78ec1d4bdb7bd06ee320a5d2.jpg",
        stats: { acting: 8, comedy: 12, improv: 10, dance: 15, design: 10, lipsync: 6 }
    },
    {
        name: "Sasha Velour",
        img: "https://i.pinimg.com/736x/7c/6d/a4/7c6da4478b5625c83e74c55a542e5e95.jpg",
        stats: { acting: 11, comedy: 14, improv: 13, dance: 11, design: 11, lipsync: 11 }
    },
    {
        name: "Bianca Del Rio",
        img: "https://i.pinimg.com/736x/26/43/61/264361d07c867a88630c4a4986d0c3b3.jpg",
        stats: { acting: 11, comedy: 12, improv: 12, dance: 12, design: 14, lipsync: 9 }
    },
    {
        name: "Jinkx Monsoon",
        img: "https://i.pinimg.com/736x/18/c1/d1/18c1d14cdcdf348000446f1a1cfb8e8b.jpg",
        stats: { acting: 12, comedy: 14, improv: 13, dance: 11, design: 8, lipsync: 11 }
    },
    {
        name: "Onya Nurve",
        img: "https://i.pinimg.com/736x/a7/04/a1/a704a15997585ec88a4d24f4ab1db791.jpg",
        stats: { acting: 13, comedy: 13, improv: 13, dance: 12, design: 8, lipsync: 14 }
    },
    {
        name: "Myki Meeks",
        img: "https://i.pinimg.com/736x/b9/76/6a/b9766aedded3bc2ebcac17b8a6b3cbde.jpg",
        stats: { acting: 13, comedy: 14, improv: 14, dance: 9, design: 11, lipsync: 13 }
    },
    {
        name: "Darlene Mitchell",
        img: "https://i.pinimg.com/736x/14/6d/51/146d51b7e40f4d8988775617d42a8151.jpg",
        stats: { acting: 12, comedy: 12, improv: 12, dance: 6, design: 11, lipsync: 8 }
    },
    {
        name: "Nini Coco",
        img: "https://i.pinimg.com/736x/b5/1e/6a/b51e6aa16ea992aa267a435831919304.jpg",
        stats: { acting: 8, comedy: 7, improv: 8, dance: 9, design: 10, lipsync: 12 }
    },
    {
        name: "Jane Don't",
        img: "https://i.pinimg.com/736x/21/96/83/2196830d84a99a963de849a8501f0772.jpg",
        stats: { acting: 13, comedy: 10, improv: 12, dance: 15, design: 11, lipsync: 12 }
    },
    {
        name: "Juicy Love Dion",
        img: "https://i.pinimg.com/736x/c1/a9/d9/c1a9d95922919fc9fc361072247c7a84.jpg",
        stats: { acting: 6, comedy: 5, improv: 6, dance: 9, design: 10, lipsync: 11 }
    },
    {
        name: "Discord Addams",
        img: "https://i.pinimg.com/736x/d8/09/50/d809509a600af933c994510af325f0d5.jpg",
        stats: { acting: 8, comedy: 8, improv: 8, dance: 9, design: 8, lipsync: 6 }
    },
    {
        name: "Kenya Pleaser",
        img: "https://i.pinimg.com/736x/67/1f/d8/671fd89dd140f71f27b4a50a83cf231d.jpg",
        stats: { acting: 10, comedy: 5, improv: 8, dance: 9, design: 7, lipsync: 10 }
    },
    {
        name: "Athena Dion",
        img: "https://i.pinimg.com/736x/0f/ce/92/0fce92d7db2363352a0980269f43d0ca.jpg",
        stats: { acting: 7, comedy: 9, improv: 8, dance: 6, design: 9, lipsync: 4 }
    },
    {
        name: "Ciara Myst",
        img: "https://i.pinimg.com/736x/f2/80/ac/f280ace351bbf9801cb9d9bc16903cad.jpg",
        stats: { acting: 9, comedy: 0, improv: 5, dance: 9, design: 11, lipsync: 6 }
    },
    {
        name: "Briar Blush",
        img: "https://i.pinimg.com/736x/3c/fa/55/3cfa55846aec77075d25b7525781468b.jpg",
        stats: { acting: 3, comedy: 0, improv: 2, dance: 9, design: 6, lipsync: 9 }
    },
    {
        name: "DD Fuego",
        img: "https://i.pinimg.com/736x/0a/ac/c2/0aacc2ebf2713b145299aea5e5bb9764.jpg",
        stats: { acting: 0, comedy: 0, improv: 0, dance: 3, design: 9, lipsync: 3 }
    },
    {
        name: "Mandy Mango",
        img: "https://i.pinimg.com/736x/36/f6/77/36f677727d9633de35235fbd86c9141b.jpg",
        stats: { acting: 3, comedy: 0, improv: 2, dance: 3, design: 6, lipsync: 7 }
    },
    {
        name: "Mia Starr",
        img: "https://i.pinimg.com/736x/6a/e1/ee/6ae1ee1d99d56d1f433898e32e7ee5c6.jpg",
        stats: { acting: 8, comedy: 5, improv: 7, dance: 12, design: 9, lipsync: 10 }
    },
    {
        name: "Vita VonTesse Starr",
        img: "https://i.pinimg.com/736x/f9/62/6a/f9626a898746975b563350c8f1bade97.jpg",
        stats: { acting: 5, comedy: 3, improv: 4, dance: 9, design: 14, lipsync: 5 }
    },
    {
        name: "Suzie Toot",
        img: "https://i.pinimg.com/736x/13/38/6c/13386cf6ca123b8d96bc8d78f4cb84b6.jpg",
        stats: { acting: 11, comedy: 8, improv: 10, dance: 12, design: 10, lipsync: 11 }
    },
    {
        name: "Sam Star",
        img: "https://i.pinimg.com/736x/34/76/6e/34766eddba9282f1c02a93c79e4f3f0e.jpg",
        stats: { acting: 9, comedy: 8, improv: 9, dance: 15, design: 13, lipsync: 14 }
    },
    {
        name: "Lydia B. Kollins",
        img: "https://i.pinimg.com/736x/d4/0c/75/d40c753538a7cd1d204ddf79b8a39429.jpg",
        stats: { acting: 8, comedy: 10, improv: 9, dance: 12, design: 9, lipsync: 11 }
    },
    {
        name: "Lexi Valentine L.",
        img: "https://i.pinimg.com/736x/4a/56/46/4a56467c2f78713d514db81d61a1a665.jpg",
        stats: { acting: 11, comedy: 11, improv: 11, dance: 9, design: 9, lipsync: 11 }
    },
    {
        name: "Lucky Starzzz",
        img: "https://i.pinimg.com/736x/79/fc/dd/79fcddc0dd30128f8552f365699ac2bf.jpg",
        stats: { acting: 0, comedy: 0, improv: 0, dance: 0, design: 3, lipsync: 3 }
    },
    {
        name: "Lana Ja'Rae",
        img: "https://i.pinimg.com/736x/7f/b0/01/7fb001d3300459bb92841f926644cd3f.jpg",
        stats: { acting: 7, comedy: 6, improv: 7, dance: 9, design: 7, lipsync: 11 }
    },
    {
        name: "Kori King",
        img: "https://i.pinimg.com/736x/fe/ad/3f/fead3fcac4b3e2864196d2d6193bcb3f.jpg",
        stats: { acting: 6, comedy: 9, improv: 8, dance: 3, design: 6, lipsync: 8 }
    },
    {
        name: "Joella",
        img: "https://i.pinimg.com/736x/af/1b/a4/af1ba41e9b83480684f7a1913a2945f0.jpg",
        stats: { acting: 0, comedy: 0, improv: 0, dance: 0, design: 3, lipsync: 7 }
    },
    {
        name: "Jewels Sparkles",
        img: "https://i.pinimg.com/736x/ae/83/41/ae8341948b8149b37f92b9c3be81b777.jpg",
        stats: { acting: 11, comedy: 10, improv: 11, dance: 12, design: 9, lipsync: 10 }
    },
    {
        name: "Hormona Lisa",
        img: "https://i.pinimg.com/736x/f9/87/21/f98721b24133671745403beb7936e4b0.jpg",
        stats: { acting: 12, comedy: 0, improv: 6, dance: 0, design: 6, lipsync: 5 }
    },
    {
        name: "Crystal Envy",
        img: "https://i.pinimg.com/736x/a2/47/97/a2479768395d4851189a52d9e9202efc.jpg",
        stats: { acting: 9, comedy: 3, improv: 6, dance: 0, design: 11, lipsync: 6 }
    },
    {
        name: "Arrietty",
        img: "https://i.pinimg.com/736x/0d/4b/11/0d4b11ac6ccea5be9123b97f815bd280.jpg",
        stats: { acting: 6, comedy: 5, improv: 6, dance: 9, design: 13, lipsync: 5 }
    },
    {
        name: "Acacia Forgot",
        img: "https://i.pinimg.com/736x/b7/38/a6/b738a669d1953aed240f47cdbfe0a7a3.jpg",
        stats: { acting: 6, comedy: 9, improv: 8, dance: 3, design: 8, lipsync: 5 }
    }

];

const ENTRANCE_LINES = {
    "Alaska": "HIEEEE",
    "Alyssa Edwards": "Girl, I am gagging",
    "Bob the Drag Queen": "I didn't come to make friends, I came to make cupcakes.",
    "Katya": "Давай cезон семь!",
    "Sasha Velour": "(loud, acted scream followed by fake coughing and posing)",
    "Bianca Del Rio": "Well, well, well! I hope you bitches are ready.",
    "Jinkx Monsoon": "You know, I can hear the cackling from down the street.",
    "Onya Nurve": "Well! It do take Nurve!",
    "Myki Meeks": "I'm Myki, but you, you can call me Myki.",
    "Darlene Mitchell": "She's corny!",
    "Nini Coco": "Gay!",
    "Jane Don't": "WAZZUP?!",
    "Juicy Love Dion": "The party princess of Miami and Mykonos is finally here. Yes, baby. The juice is loose.",
    "Discord Addams": "Who's ready for a little chaos?",
    "Kenya Pleaser": "I have one thing to say: Kenya Pleaser? (moans)",
    "Athena Dion": "Honey, this is how you throw a party on Drag Race, bitch.",
    "Ciara Myst": "Feeling scared yet? You should be.",
    "Briar Blush": "WHY ARE YOU RECORDING ME!?",
    "DD Fuego": "Can I say the F-word? FUEGO!",
    "Mandy Mango": "Miss Nurse! Don't you know? A mango a day keeps the doctor away.",
    "Mia Starr": "I'm repping for the big backs, and I came to eat.",
    "Vita VonTesse Starr": "Baby it's easy to see, that I'm the key. You can question those other girls, but never Queen V",
    "Suzie Toot": "I've always wanted my name in the papers.",
    "Sam Star": "Well, I heard y'all were looking for America's Next Drag Superstar!",
    "Lydia B. Kollins": "Did someone say my name three times? (moans)",
    "Lexi Valentine L.": "Why y'all gagging? I haven't even stepped on any necks yet.",
    "Lucky Starzzz": "Oh, daddy, I think I stained the sheets.",
    "Lana Ja'Rae": "Gouda morning, Ja'Reamers.",
    "Kori King": "*sip* Ahhh. Good morning, kingdom!",
    "Joella": "大家好, 大家好, welcome to the Joella Dynasty, bitch!",
    "Jewels Sparkles": "Don't worry, I'm not just a bitch; I'm that bitch.",
    "Hormona Lisa": "Hello, loyal subjects. It is I, Hormona Lisa, at your service. *laugh* Wow, that was annoying.",
    "Crystal Envy": "Yeah, I'd envy me too.",
    "Arrietty": "Hi! (said in Stitch voice)",
    "Acacia Forgot": "Totally tubular."  
};

const ELIMINATION_LINES = {
    "Alaska": "*Cries*",
    "Alyssa Edwards": "Well, I was a lovely fifth alternate!",
    "Bob the Drag Queen": "Thank you for everything Rupaul...",
    "Katya": "*Grunts and messes with her hair*",
    "Sasha Velour": "Thank you for everything you have done for the queer community, I love you all so much. Goodbye.",
    "Bianca Del Rio": "Really?",
    "Jinkx Monsoon": "Welp! Here comes all stars!",
    "Onya Nurve": "*Sobs*",
    "Myki Meeks": "At least I'm leaving with all my teeth.",
    "Darlene Mitchell": "*Poses seductively and then laughs*",
    "Nini Coco": "*Cries*",
    "Jane Don't": "Oh, uhm... eh...",
    "Juicy Love Dion": "Never forget: the juice is officially loose!",
    "Discord Addams": "Well, see you on All Stars!",
    "Kenya Pleaser": "The question still stands, RuPaul: Kenya Pleaser?",
    "Athena Dion": "May your Prosecco always be on ice. May you always fly first. Always settle for more, and never accept any less. Thank you.",
    "Ciara Myst": "Oh, and since you girls need a new vocal stim, you can use this one: OOH-OOH-AH-OOH!",
    "Briar Blush": "WHY ARE YOU RECORDING ME?!",
    "DD Fuego": "Well... it was short... it was sweet... I wish it had been a little spicier. Adiós!",
    "Mandy Mango": "Mangoes can be eaten, mangoes can be slurped... Cheers to all the lovers who make our mangoes burst!",
    "Mia Starr": "FUCK YOU BLOODY MARYYYYYYYYYYY!! BITCH!!",
    "Vita VonTesse Starr": "Final words... Vita Vita Vita (Everyone: You know you wanna eat her!)",
    "Suzie Toot": "RuPaul, I have just one thing to say! (points at foot and begins tap dancing)",
    "Sam Star": "*Cries* Goodbye...",
    "Lydia B. Kollins": "Well, shit.",
    "Lexi Valentine L.": "Man... fuck bro, now what?",
    "Lucky Starzzz": "RuPaul, remember, it's Star-zuh-zuh-zuh-zuh!",
    "Lana Ja'Rae": "Well, is the bus still running?",
    "Kori King": "At the end of the day, all you can do is laugh!",
    "Joella": "Well, at least I didn't die a local girl!",
    "Jewels Sparkles": "Ding!",
    "Hormona Lisa": "Rot in hell, thanks a lot!",
    "Crystal Envy": "You definitely make me feel mayo real righty, RuPaul!",
    "Arrietty": "Well, it looks like the runway category just dropped, immensely! Y'all ugly boogers!",
    "Acacia Forgot": "You can now find my new single on all streaming platforms."
};

// ====== CHALLENGES ======

const CHALLENGES = [
    // PERFORMANCE
    "Acting",
    "Comedy",
    "Improv",
    "Dance",
    "Rusical",
    "Girl Groups",
    "Talent Show",
    "Lip Sync Smackdown",

    // DESIGN
    "Design",
    "Makeover",
    "Ball Challenge",

    // WRITING / SPEAKING
    "Roast",
    "Roast Battle",
    "Stand-Up",
    "RDR Live",
    "Commercial",
    "Branding",

    // MUSIC
    "Songwriting",
    "Music Video",

    // OTHER
    "Snatch Game",
    "Marketing Challenge",
    "Hosting Challenge"
];

const RUNWAY_THEMES = [
    "Your Neck, Your Back, Your Pussy Crack: Your Favorite Body Part",
    "Animal Attraction",
    "Not Today, Satin",
    "Shake, Shake, Shake",
    "I Can See Right Through Her",
    "Eighties Ladies",
    "Beige Against The Machine",
    "From Wholsome To Folsom",
    "Drag Excellence",
    "Masked for Masked Singer",
    "Is It Cake?",
    "Quilted For Your Pleasure",
    "Tickled Pink",
    "Bathing Beauties",
    "Sea Creature Couture",
    "Nailed It",
    "Parasols, Shady Ladies",
    "Who Wears Short Shorts?",
    "Black & White Ball",
    "Ugliest Dress Ever",
    "Opulent Outerwear",
];

const LIP_SYNC_SONGS = [
    { title: "Too Much", artist: "Dove Cameron" },
    { title: "Love in Real Life", artist: "Lizzo" },
    { title: "Lights Camera Action", artist: "Kylie Minogue" },
    { title: "Toxic", artist: "Britney Spears" },
    { title: "Houdini", artist: "Dua Lipa" },
    { title: "Head Over Heels", artist: "The Go Go's" },
    { title: "Call Me When You Break Up", artist: "Selena Gomez, Benny Blanco, and Gracie Abrams" },
    { title: "Total Eclipse of the Heart", artist: "Bonnie Tyler" },
    { title: "we can't be friends (wait for your love)", artist: "Ariana Grande" },
    { title: "Garden Of Eden", artist: "Lady Gaga" },
    { title: "Super Graphic Ultra Modern Girl", artist: "Chappell Roan" },
    { title: "Enough (Miami)", artist: "Cardi B" },
    { title: "Pretty Ugly", artist: "Zara Larsson" },
    { title: "Jerkin'", artist: "Amyl & The Sniffers" },
    { title: "Feels Like Another One ", artist: "Patti LaBelle" },
    { title: "Every Girl You've Ever Loved", artist: "Miley Cyrus ft. Naomi Campbell" },
    { title: "yes, and?", artist: "Ariana Grande" },
    { title: "The Way That You Love Me", artist: "Paula Abdul" },
    { title: "Buttons", artist: "The Pussycat Dolls ft. Snoopdog" },
    { title: "Boogie Wonderland", artist: "Earth, Wind & Fire and The Emotions" },
    { title: "get him back!", artist: "Olivia Rodrigo" },
    { title: "Hands to Myself", artist: "Selena Gomez" },
    { title: "WET DREAM", artist: "Adam Lambert" },
    { title: "Kiss Me Deadly", artist: "Lita Ford" },
    { title: "YA YA", artist: "Beyoncé" },
    { title: "Unholy", artist: "Sam Smith and Kim Petras" },
    { title: "Illusion", artist: "Dua Lipa" },
    { title: "1 Thing", artist: "Amerie" },
    { title: "Love Child", artist: "Diana Ross & The Supremes" },
    { title: "Woman's World", artist: "Katy Perry" },
    { title: "Alter Ego", artist: "Doechii & JT" },
    { title: "Say Liza (Liza with a 'Z')", artist: "Liza Minelli" },
    { title: "Training Season", artist: "Dua Lipa" },
    { title: "Step by Step (Junior Vasquez Tribal X Beats)", artist: "Whitney Houston" },
    { title: "Blow Me (One Last Kiss)", artist: "P!nk" },
    { title: "You Make Me Feel (Mighty Real)", artist: "Sylvester" },
    { title: "We Found Love", artist: "Rihanna" },
    { title: "360", artist: "Charli XCX" },
    { title: "APT", artist: "ROSÉ and Bruno Mars" },
    { title: "Abracadabra", artist: "Lady Gaga" },
];

// ====== DOM ======

const grid = document.getElementById("queen-grid");
const overlay = document.getElementById("episode-overlay");
const episodeContent = document.getElementById("episode-content");
const episodeContinueBtn = document.getElementById("episode-continue-btn");
const episodeQueensContainer = document.getElementById("episode-queens");

// ====== RENDER QUEENS ======

function renderQueens() {
    grid.innerHTML = "";

    // Update queen count
    document.getElementById("queen-count").textContent =
        `Available Queens: ${ALL_QUEENS.length}`;
    
    ALL_QUEENS
        .slice()
        .sort((a, b) => a.name.localeCompare(b.name))
        .forEach(q => {
            const card = document.createElement("div");
            card.className = "queen-card";
            card.dataset.name = q.name;

            card.innerHTML = `
                <img src="${q.img}" alt="${q.name}">
                <p>${q.name}</p>
                <div class="stats-box">
                    <p><strong>Comedy:</strong> ${q.stats.comedy}</p>
                    <p><strong>Acting:</strong> ${q.stats.acting}</p>
                    <p><strong>Improv:</strong> ${q.stats.improv}</p>
                    <p><strong>Dance:</strong> ${q.stats.dance}</p>
                    <p><strong>Design:</strong> ${q.stats.design}</p>
                    <p><strong>Lip Sync:</strong> ${q.stats.lipsync}</p>
                </div>
            `;

            card.addEventListener("click", () => card.classList.toggle("selected"));
            grid.appendChild(card);
        });
}

renderQueens();

// SEARCH
document.getElementById("search").addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase();
    document.querySelectorAll(".queen-card").forEach(card => {
        card.style.display = card.dataset.name.toLowerCase().includes(term) ? "block" : "none";
    });
});

document.getElementById("random-select-btn").addEventListener("click", () => {
    const count = parseInt(document.getElementById("random-count").value);

    if (isNaN(count) || count < 1 || count > 16) {
        alert("Please enter a number between 1 and 16.");
        return;
    }

    // Clear all selections first
    document.querySelectorAll(".queen-card").forEach(card => {
        card.classList.remove("selected");
    });

    // Pick random queens
    const shuffled = ALL_QUEENS.slice().sort(() => Math.random() - 0.5);
    const chosen = shuffled.slice(0, count).map(q => q.name);

    // Select them in the UI
    document.querySelectorAll(".queen-card").forEach(card => {
        if (chosen.includes(card.dataset.name)) {
            card.classList.add("selected");
        }
    });
});
// ====== STATE ======

let currentCast = [];
let seasonQueens = [];
let episodeNumber = 1;
let episodeStep = 0;
let currentChallenge = null;
let currentJudging = null;
let currentBottom2 = null;
let currentLipSyncResult = null;
let isFinale = false;

let trackRecord = {}; // { queenName: ["WIN", "HIGH", ...] }
let eliminationOrder = [];

// ====== HELPERS ======

document.getElementById("premiere-type").addEventListener("change", (e) => {
    selectedPremiereType = e.target.value;
});

document.getElementById("finale-type").addEventListener("change", (e) => {
    selectedFinaleType = e.target.value;
});

function getRandomChallenge() {
    return CHALLENGES[Math.floor(Math.random() * CHALLENGES.length)];
}

function scoreQueen(q, type) {
    const s = q.stats;
    let base = 0;

    switch (type) {
        case "Acting":
        case "RDR Live":
            base = s.acting + s.improv + s.comedy;
            break;

        case "Comedy":
        case "Roast":
        case "Roast Battle":
        case "Stand-Up":
            base = s.comedy + s.improv;
            break;

        case "Improv":
        case "Snatch Game":
            base = s.improv + s.comedy + s.acting;
            break;

        case "Dance":
        case "Girl Groups":
        case "Music Video":
            base = s.dance + s.lipsync;
            break;

        case "Rusical":
        case "Talent Show":
            base = s.acting + s.dance + s.lipsync;
            break;

        case "Design":
        case "Makeover":
        case "Ball Challenge":
            base = s.design + s.acting;
            break;

        case "Commercial":
        case "Branding":
        case "Marketing Challenge":
        case "Hosting Challenge":
            base = s.acting + s.comedy + s.improv;
            break;

        case "Songwriting":
            base = s.comedy + s.improv + s.lipsync;
            break;

        case "Lip Sync Smackdown":
            base = s.lipsync + s.dance;
            break;

        default:
            base = s.acting + s.comedy;
    }

    return base + (Math.floor(Math.random() * 10) - 5);
}

function getScoreBasedRating(score, maxScore, minScore) {
    const range = maxScore - minScore;
    const normalized = (score - minScore) / range;

    if (normalized >= 0.85) return "Slayed";
    if (normalized >= 0.65) return "Good";
    if (normalized >= 0.45) return "Fine";
    if (normalized >= 0.25) return "Bad";
    return "Flopped";
}

function judgeQueens(cast, type) {

    // ===== DOUBLE PREMIERE SPECIAL RULES =====
    if (premiereType === "double" && episodeNumber <= 2) {

        // Score everyone normally
        const scored = cast
            .map(q => ({ queen: q, score: scoreQueen(q, type) }))
            .sort((a, b) => b.score - a.score);

        const top1 = scored[0].queen;
        const top2 = scored[1].queen;
        const safe = scored.slice(2).map(s => s.queen);

        return {
            scored,
            winner: null,
            high: [],
            safe,
            low: [],
            bottom2: [top1, top2] // reused as TOP2
        };
    }

    // ===== NORMAL EPISODE LOGIC =====
    const scored = cast
        .map(q => ({ queen: q, score: scoreQueen(q, type) }))
        .sort((a, b) => b.score - a.score);

    const winnerEntry = scored.find(s => getWinCount(s.queen) < 4) || scored[0];
    const winner = winnerEntry.queen;

    const bottom2 = [
        scored[scored.length - 1].queen,
        scored[scored.length - 2].queen
    ];

    const remaining = scored
        .filter(s =>
            s.queen.name !== winner.name &&
            !bottom2.some(b => b.name === s.queen.name)
        )
        .map(s => s.queen);

    let high = [], low = [], safe = [];

    if (remaining.length <= 2) {
        safe = remaining;
    } else {
        high = remaining.slice(0, 2);
        low = remaining.slice(-2);
        safe = remaining.slice(2, remaining.length - 2);
    }

    return { scored, winner, high, safe, low, bottom2 };
}

function lipSync(btm2) {
    const [q1, q2] = btm2;

    const q1Bottoms = getBottomCount(q1);
    const q2Bottoms = getBottomCount(q2);

    // AUTO-ELIM RULE (4th bottom)
    if (q1Bottoms >= 3 && q2Bottoms < 3) {
        return { type: "single", winner: q2, eliminated: [q1] };
    }
    if (q2Bottoms >= 3 && q1Bottoms < 3) {
        return { type: "single", winner: q1, eliminated: [q2] };
    }

    // If BOTH have 3 bottoms → normal lipsync only
    const allowSpecial = !(q1Bottoms >= 3 && q2Bottoms >= 3);

    // Base lipsync scores
    const s1 = q1.stats.lipsync + (Math.random() * 6 - 3);
    const s2 = q2.stats.lipsync + (Math.random() * 6 - 3);

    // DOUBLE SHANTAY (both stay)
    if (allowSpecial && chance(0.10)) { // 10% chance
        return { type: "double-shantay", winner: null, eliminated: [] };
    }

    // DOUBLE SASHAY (both go)
    if (allowSpecial && chance(0.05)) { // 5% chance
        return { type: "double-sashay", winner: null, eliminated: [q1, q2] };
    }

    // NORMAL LIP SYNC
    if (s1 >= s2) return { type: "single", winner: q1, eliminated: [q2] };
    return { type: "single", winner: q2, eliminated: [q1] };
}

function eliminateFromCast(cast, q) {
    return cast.filter(x => x.name !== q.name);
}

function showOverlay() { overlay.classList.remove("hidden"); }
function hideOverlay() { overlay.classList.add("hidden"); }

function setEpisodeText(text, queens = []) {
    episodeContent.innerHTML = text;
    episodeQueensContainer.innerHTML = "";

    queens.forEach(q => {
        const img = document.createElement("img");
        img.src = q.img;
        img.className = "episode-queen-img";
        episodeQueensContainer.appendChild(img);
    });
}

function getRandomLipSyncSong() {
    return LIP_SYNC_SONGS[Math.floor(Math.random() * LIP_SYNC_SONGS.length)];
}

function chance(p) {
    return Math.random() < p;
}

function getRandomRunwayTheme() {
    return RUNWAY_THEMES[Math.floor(Math.random() * RUNWAY_THEMES.length)];
}

// ===== DOUBLE PREMIERE: SPLIT GROUPS =====
function splitIntoDoublePremiereGroups(queens) {
    const shuffled = [...queens];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    const mid = Math.floor(shuffled.length / 2);

    const group1 = shuffled.slice(0, mid);
    const group2 = shuffled.slice(mid);

    return [group1, group2];
}

// ====== TRACK RECORD ======

function initTrackRecord() {
    trackRecord = {};
    eliminationOrder = []; // reset this too
    seasonQueens.forEach(q => trackRecord[q.name] = []);
}

function updateTrackRecordEpisode(j, bottom2, eliminated) {
    seasonQueens.forEach(q => {
        let p = "";

        if (q.name === eliminated.name) p = "ELIM";
        else if (q.name === j.winner.name) p = "WIN";
        else if (bottom2.some(b => b.name === q.name)) p = "BTM2";
        else if (j.high.some(h => h.name === q.name)) p = "HIGH";
        else if (j.low.some(l => l.name === q.name)) p = "LOW";
        else if (j.safe.some(s => s.name === q.name)) p = "SAFE";

        trackRecord[q.name].push(p);
    });
}

function updateTrackRecordFinale(winner, runnerUp, cutQueen) {
    seasonQueens.forEach(q => {
        let p = "";

        if (q.name === winner.name) p = "WINNER";
        else if (q.name === runnerUp.name) p = "RUNNER-UP";
        else if (q.name === cutQueen.name) p = "ELIM";

        trackRecord[q.name].push(p);
    });
}

function getLatestPlacement(q) {
    const rec = trackRecord[q.name];
    if (!rec || rec.length === 0) return "";
    return rec[rec.length - 1];
}

function getWinCount(q) {
    return trackRecord[q.name].filter(p => p === "WIN").length;
}

function getBottomCount(q) {
    return trackRecord[q.name].filter(p => p === "BTM2").length;
}

function sortQueensByPlacement(queens) {
    const order = ["WINNER", "RUNNER-UP", "WIN", "HIGH", "SAFE", "LOW", "BTM2", "ELIM", ""];

    // ACTIVE queens (not eliminated)
    const active = queens.filter(q => !eliminationOrder.includes(q.name));

    // ELIMINATED queens in the exact order they were eliminated
    const eliminated = eliminationOrder
        .map(name => queens.find(q => q.name === name))
        .filter(q => q); // remove nulls

    // Sort active queens normally
    const sortedActive = active.slice().sort((a, b) => {
        const pa = getLatestPlacement(a);
        const pb = getLatestPlacement(b);
        return order.indexOf(pa) - order.indexOf(pb);
    });

    // Return active queens first, then eliminated queens frozen in order
    return [...sortedActive, ...eliminated];
}

function renderTrackRecordCards() {
    const container = document.createElement("div");
    container.className = "track-record-container";

    const sortedQueens = sortQueensByPlacement(seasonQueens);

    sortedQueens.forEach(q => {
        const card = document.createElement("div");
        card.className = "track-card";

        const img = document.createElement("img");
        img.src = q.img;
        img.className = "track-card-img";

        const nameEl = document.createElement("div");
        nameEl.className = "track-card-name";
        nameEl.textContent = q.name;

        const placements = document.createElement("div");
        placements.className = "track-card-placements";

        trackRecord[q.name].forEach(p => {
            const badge = document.createElement("span");
            badge.className = "track-badge track-" + p.toLowerCase();
            badge.textContent = p;
            placements.appendChild(badge);
        });

        card.appendChild(img);
        card.appendChild(nameEl);
        card.appendChild(placements);
        container.appendChild(card);
    });

    episodeContent.appendChild(container);
}

// ====== SEASON CONTROL ======

function startSeason() {
    const selected = [...document.querySelectorAll(".queen-card.selected")].map(c => c.dataset.name);

    if (selected.length < 4 || selected.length > 16) {
        alert("Please select between 4 and 16 queens.");
        return;
    }

    currentCast = ALL_QUEENS.filter(q => selected.includes(q.name));
    seasonQueens = [...currentCast];
    initTrackRecord();

    // ===== READ PREMIERE TYPE =====
premiereType = selectedPremiereType;

if (premiereType === "double") {
    premiereGroups = splitIntoDoublePremiereGroups(currentCast);
    currentPremiereIndex = 0;
} else {
    premiereGroups = null;
}

    episodeNumber = 1;
    startEpisode();

    console.log("Premiere:", selectedPremiereType);
console.log("Finale:", selectedFinaleType);
    
}

function startEpisode() {
    episodeStep = 0;
    isFinale = currentCast.length === 3;
    // ===== DOUBLE PREMIERE: USE GROUP QUEENS =====
if (premiereType === "double" && episodeNumber <= 2) {
    currentCast = premiereGroups[episodeNumber - 1];
}
    currentChallenge = getRandomChallenge();
    currentJudging = null;
    currentBottom2 = null;
    currentLipSyncResult = null;

    showOverlay();
    advanceEpisodeStep();
}

// ====== EPISODE FLOW ======

let finaleCutQueen = null;
let finaleWinner = null;
let finaleRunnerUp = null;

function advanceEpisodeStep() {
    if (isFinale) return advanceFinaleStep();

    switch (episodeStep) {
        case 0:
            if (episodeNumber === 1) {
                const lines = currentCast.map(q => `
                    <div class="entrance-line">
                        <img src="${q.img}" class="entrance-img">
                        <p><strong>${q.name}:</strong> ${ENTRANCE_LINES[q.name]}</p>
                    </div>
                `).join("");

                setEpisodeText(`
                    <h2>Episode 1</h2>
                    <h3>Entrance Lines</h3>
                    ${lines}
                `);
            } else {
                setEpisodeText(
                    `<h2>Episode ${episodeNumber}</h2><p>${currentCast.length} queens remain.</p>`,
                    currentCast
                );
            }
            break;

        case 1:
            const runwayTheme = getRandomRunwayTheme();
currentRunwayTheme = runwayTheme;

setEpisodeText(
    `
    <h2>Maxi Challenge</h2>
    <p>This week’s challenge is <strong>${currentChallenge}</strong>!</p>
    <h3>Runway Theme</h3>
    <p><strong>${runwayTheme}</strong></p>
    `,
    currentCast
);
            break;

        case 2:
    currentJudging = judgeQueens(currentCast, currentChallenge);

    const scored = currentJudging.scored;
    const maxScore = scored[0].score;
    const minScore = scored[scored.length - 1].score;

    const summaryHTML = scored.map(s => `
        <div class="perf-summary">
            <img src="${s.queen.img}" class="perf-summary-img">
            <p><strong>${s.queen.name}</strong> — ${getScoreBasedRating(s.score, maxScore, minScore)}</p>
        </div>
    `).join("");

    setEpisodeText(`
        <h2>Challenge Results</h2>
        ${summaryHTML}
    `);

    break;

        case 3:
            setEpisodeText(
                `<h2>Safe</h2><p>${currentJudging.safe.map(q => q.name).join(", ") || "None"}</p>`,
                currentJudging.safe
            );
            break;

        case 4:
            setEpisodeText(
                `<h2>High</h2><p>${currentJudging.high.map(q => q.name).join(", ") || "None"}</p>`,
                currentJudging.high
            );
            break;

        case 5:
    if (premiereType === "double" && episodeNumber <= 2) {
        // SKIP WINNER PAGE — winner is decided after lipsync
        episodeStep++;
        return advanceEpisodeStep();
    }

    // NORMAL WINNER PAGE
    setEpisodeText(`
        <h2>Winner</h2>
        <p>🏆 <strong>${currentJudging.winner.name}</strong> wins the challenge!</p>
    `, [currentJudging.winner]);
    break;

        case 6:
    if (premiereType === "double" && episodeNumber <= 2) {
        // SKIP LOW PAGE
        episodeStep++;
        return advanceEpisodeStep();
    }

    // NORMAL LOW PAGE
    setEpisodeText(`
        <h2>Low</h2>
        <p>The following queens are low:</p>
    `, currentJudging.low);
    break;

        case 7:
    if (premiereType === "double" && episodeNumber <= 2) {
        const [top1, top2] = currentJudging.bottom2;

        setEpisodeText(`
            <h2>Top 2 Lipsync</h2>
            <p>The top 2 queens will now lipsync for the win!</p>
        `, [top1, top2]);

        break;
    }

    // NORMAL BTM2 PAGE
    setEpisodeText(`
        <h2>Bottom 2</h2>
        <p>The following queens are up for elimination:</p>
    `, currentJudging.bottom2);
    break;

        case 8:
    if (premiereType === "double" && episodeNumber <= 2) {
        const [top1, top2] = currentJudging.bottom2;

        const winner = Math.random() < 0.5 ? top1 : top2;
        const runner = winner === top1 ? top2 : top1;

        trackRecord[winner.name].push("WIN");
        trackRecord[runner.name].push("TOP2");
        currentJudging.safe.forEach(q => trackRecord[q.name].push("SAFE"));

        setEpisodeText(`
            <h2>Lipsync Winner</h2>
            <p>🏆 <strong>${winner.name}</strong> wins the lipsync and the challenge!</p>
        `, [winner]);

        break;
    }

    // NORMAL LIP SYNC
    currentLipSyncResult = lipSync(currentJudging.bottom2);
    const song = getRandomLipSyncSong();
    setEpisodeText(`
        <h2>Lip Sync</h2>
        <p>Song: <strong>${song.title}</strong> by ${song.artist}</p>
    `, currentJudging.bottom2);
    break;

        case 9:

    // ===== DOUBLE PREMIERE: NO ELIMINATION =====
    if (premiereType === "double" && episodeNumber <= 2) {
        // Skip elimination entirely
        episodeStep++;
        return advanceEpisodeStep();
    }

    // ===== NORMAL EPISODES BELOW =====
    const result = currentLipSyncResult;

    if (result.type === "double-shantay") {
        setEpisodeText(`
            <h2>Double Shantay!</h2>
            <p>💖 Both queens stay!</p>
            <p><strong>Song:</strong> "${currentLipSyncSong.title}" by ${currentLipSyncSong.artist}</p>
        `, currentBottom2);

        // Track record: both get BTM2
        seasonQueens.forEach(q => {
            let p = "";
            if (currentBottom2.some(b => b.name === q.name)) p = "BTM2";
            else if (q.name === currentJudging.winner.name) p = "WIN";
            else if (currentJudging.high.some(h => h.name === q.name)) p = "HIGH";
            else if (currentJudging.low.some(l => l.name === q.name)) p = "LOW";
            else if (currentJudging.safe.some(s => s.name === q.name)) p = "SAFE";
            trackRecord[q.name].push(p);
        });

        break;
    }

    // (your remaining elimination logic continues here)

if (result.type === "double-sashay") {
    const eliminated = result.eliminated;

    eliminated.forEach(q => {
        currentCast = eliminateFromCast(currentCast, q);
        eliminationOrder.unshift(q.name);
    });

    setEpisodeText(`
        <h2>Double Sashay!</h2>
        <p>❌ <strong>${eliminated[0].name}</strong> and <strong>${eliminated[1].name}</strong> have been eliminated.</p>
        <p><strong>Song:</strong> "${currentLipSyncSong.title}" by ${currentLipSyncSong.artist}</p>
    `, eliminated);

    // Track record: both get ELIM
    seasonQueens.forEach(q => {
        let p = "";
        if (eliminated.some(e => e.name === q.name)) p = "ELIM";
        else if (q.name === currentJudging.winner.name) p = "WIN";
        else if (currentBottom2.some(b => b.name === q.name)) p = "BTM2";
        else if (currentJudging.high.some(h => h.name === q.name)) p = "HIGH";
        else if (currentJudging.low.some(l => l.name === q.name)) p = "LOW";
        else if (currentJudging.safe.some(s => s.name === q.name)) p = "SAFE";
        trackRecord[q.name].push(p);
    });

    break;
}

// NORMAL ELIMINATION
const eliminated = result.eliminated[0];
currentCast = eliminateFromCast(currentCast, eliminated);
eliminationOrder.unshift(eliminated.name);

updateTrackRecordEpisode(currentJudging, currentBottom2, eliminated);

            setEpisodeText(`
    <h2>Elimination</h2>
    <p>❌ <strong>${eliminated.name}</strong> has been eliminated.</p>
    <p><strong>Lip Sync Song:</strong> "${currentLipSyncSong.title}" by ${currentLipSyncSong.artist}</p>
    <p><em>"${ELIMINATION_LINES[eliminated.name] || ""}"</em></p>
    <p>${currentCast.length} queens remain.</p>
`, [eliminated]);
            break;

        case 10:
            setEpisodeText(`<h2>Track Record</h2><p>Here is the track record so far:</p>`);
            renderTrackRecordCards();
            break;

        case 11:
            if (currentCast.length <= 1) {
                location.reload();
                return;
            } else {
                setEpisodeText(
                    `<h2>Next Episode</h2><p>Get ready for Episode ${episodeNumber + 1}…</p>`,
                    currentCast
                );
            }
            break;

        default:
            episodeNumber++;
            startEpisode();
            return;
    }

    episodeStep++;
}
  
// ====== FINALE FLOW ======

function advanceFinaleStep() {
    switch (episodeStep) {
        case 0:
            setEpisodeText(`<h2>Finale</h2><p>Our Top 3 queens are ready for the crown.</p>`, currentCast);
            break;

        case 1:
            setEpisodeText(`<h2>Final Challenge</h2><p>The queens face their final challenge…</p>`, currentCast);
            break;

        case 2:
            // Random cut
            const cutIndex = Math.floor(Math.random() * currentCast.length);
            finaleCutQueen = currentCast[cutIndex];
            currentCast = eliminateFromCast(currentCast, finaleCutQueen);
            eliminationOrder.unshift(finaleCutQueen.name);

            setEpisodeText(`
    <h2>Top 3 Cut</h2>
    <p>❌ <strong>${finaleCutQueen.name}</strong> has been cut.</p>
    <p><em>"${ELIMINATION_LINES[finaleCutQueen.name] || ""}"</em></p>
    <p>The final 2 will now lip sync for the crown.</p>
`, [finaleCutQueen]);
            break;

        case 3:
            const final2 = [...currentCast];
            const finalResult = lipSync(final2);

            finaleWinner = finalResult.winner;
            finaleRunnerUp = finalResult.eliminated;

            currentCast = [finaleWinner];

            updateTrackRecordFinale(finaleWinner, finaleRunnerUp, finaleCutQueen);

            const finaleSong = getRandomLipSyncSong();
currentLipSyncSong = finaleSong;

setEpisodeText(`
    <h2>Lip Sync For The Crown</h2>
    <p>${final2[0].name} vs ${final2[1].name}</p>
    <p><strong>Final Song:</strong> "${finaleSong.title}" by ${finaleSong.artist}</p>
`, final2);

            break;

        case 4:
            setEpisodeText(`
                <h2>Season Winner</h2>
                <p>👑 <strong>${finaleWinner.name}</strong> is the winner of the season!</p>
            `, [finaleWinner]);
            break;

        case 5:
            setEpisodeText(`
                <h2>Final Track Record</h2>
                <p>Here is the final track record for the season:</p>
            `);
            renderTrackRecordCards();
            break;

        case 6:
            // Auto-refresh after finale
            location.reload();
            return;

        default:
            location.reload();
            return;
    }

    episodeStep++;
}

// ====== EVENT LISTENERS ======

document.getElementById("start-btn").addEventListener("click", startSeason);
episodeContinueBtn.addEventListener("click", advanceEpisodeStep);
