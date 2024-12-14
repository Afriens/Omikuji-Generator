function generateRandomNumber(num) {
    return Math.floor(Math.random() * num);
}

const omikuji = {
    waka: [
        "The wind carries the blossoms afar, yet they shall return with spring.",
        "Even the moon hides its face behind the clouds.",
        "Rivers flow unceasing, yet the water is never the same.",
        "A single bird takes flight before the storm.",
        "The bamboo bends but does not break."
    ],

    fortuneLevels: [
        { level: "Daikichi (大吉)", meaning: "Excellent good luck" },
        { level: "Chūkichi (中吉)", meaning: "Moderate good luck" },
        { level: "Shōkichi (小吉)", meaning: "Small good luck" },
        { level: "Kichi (吉)", meaning: "Luck" },
        { level: "Hankichi (半吉)", meaning: "Half luck" },
        { level: "Suekichi (末吉)", meaning: "Future luck" },
        { level: "Sueshōkichi (末小吉)", meaning: "Small future luck" },
        { level: "Kyō (凶)", meaning: "Bad luck" },
        { level: "Shōkyō (小凶)", meaning: "Small bad luck" },
        { level: "Hankyō (半凶)", meaning: "Half bad luck" },
        { level: "Suekyō (末凶)", meaning: "Future bad luck" },
        { level: "Daikyō (大凶)", meaning: "Great bad luck" }
    ],

    advice: {
        goodLuck: [
            "Take the opportunity to start something new.",
            "Cherish the moments with your loved ones.",
            "Your hard work will soon pay off.",
            "Trust your instincts and move forward.",
            "Share your fortune with others to amplify it."
        ],
        badLuck: [
            "Avoid major decisions for now.",
            "Stay cautious in your relationships.",
            "Be patient; better days are coming.",
            "Reflect on your actions and seek improvement.",
            "Tie this Omikuji and leave your worries behind."
        ]
    },

    getResults: function(fortune) {
        if (fortune.includes("吉")) {
            return [
                "Keep this Omikuji to make it real.",
                "Tie it to amplify your good luck."
            ];
        } else {
            return [
                "Tie this Omikuji to get rid of the bad luck.",
                "Keep it, but be cautious."
            ];
        }
    }
};

function generateOmikuji() {
    // Random waka
    const randomWaka = omikuji.waka[generateRandomNumber(omikuji.waka.length)];

    // Random fortune level
    const randomFortune = omikuji.fortuneLevels[generateRandomNumber(omikuji.fortuneLevels.length)];

    // Advice based on fortune
    const adviceList = randomFortune.level.includes("吉")
        ? omikuji.advice.goodLuck
        : omikuji.advice.badLuck;
    const randomAdvice = adviceList[generateRandomNumber(adviceList.length)];

    // Results based on fortune
    const results = omikuji.getResults(randomFortune.level);

    // Full Omikuji
    return {
        waka: randomWaka,
        fortune: randomFortune.level + " - " + randomFortune.meaning,
        advice: randomAdvice,
        results: results
    };
}

// The Omikuji
const omikujiResult = generateOmikuji();
console.log(omikujiResult.waka);
console.log("Fortune Level:", omikujiResult.fortune);
console.log("Advice:", omikujiResult.advice);
console.log(omikujiResult.results.join(" / "));