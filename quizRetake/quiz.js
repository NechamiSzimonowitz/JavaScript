(function () {
    const boysNames = ["chaim", "moshe", "Aron", "Dovid", "Yosef", "Nachum", "Sruli", "Shmuel", "Dov", "yaakov", "chaim", "moshe", "Aron", "Dovid", "Yosef", "Nachum", "Sruli", "Shmuel", "Dov", "yaakov"];
    const boysLastNames = ["Shwartz", "Stern", "Klein", "Rubin", "Ribiat", "Landau", "Goldman", "Kellner", "Smith", "Lederer", "Ausch", "Kupperwasser", "Kesserman", "Pruzansky", "Bak", "Kleinman", "Sternstein", "Basch", "Kagan", "Weinreb", "Reichman", "Schechter", "Asia", "Waldman", "Loeb", "Rothenberg", "Rose", "Ritterman", "Szimano", "Rottenberg", "Stern", "Moskowitz", "Horowitz", "Epstein", "Lerman", "Friedman", "Kaman", "Roth", "Olshin", "Fried"]
    const girlsNames = ["sara", "Rivka", "Rochel", "Leah", "Chani", "Leah", "Esty", "Shaina", "Malky", "Blimie", "sara", "Rivka", "Rochel", "Leah", "Chani", "Leah", "Esty", "Shaina", "Malky", "Blimie"];
    const ids = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
    const boys = [];
    const girls = [];
    const usedNumber = [];

    for (let i = 0; i < 20; i++) {
        let randomChosen = false;
        let randomNumber;
        while (!randomChosen) {
            randomNumber = Math.floor(Math.random() * 20);
            randomChosen = true;
            for (let j = 0; j < usedNumber.length; j++) {
                if (randomNumber == usedNumber[j]) {
                    randomChosen = false;
                    break;
                }
            }
        }
        usedNumber[i] == randomNumber;
        boys[i] = {
            name: boysNames[randomNumber],
            lastName: boysLastNames[randomNumber],
            gender: "Male",
            id: ids[i],
            spouse: girls[randomNumber]
        };
        girls[i] = {
            name: girlsNames[randomNumber],
            gender: "Female",
            id: i + 20,
            spouse: boys[randomNumber]
        };

    };
    for (let i = 0; i < 20; i++) {
        console.log(`Boy ${i + 1}:`);
        console.log(`Name: ${boys[i].name}`);
        console.log(`Gender: ${boys[i].gender}`);
        console.log(`ID: ${boys[i].id}`);
        console.log(`Spouse: ${boys[i].spouse.name}\n`);

        console.log(`Girl ${i + 1}:`);
        console.log(`Name: ${girls[i].name}`);
        console.log(`Gender: ${girls[i].gender}`);
        console.log(`ID: ${girls[i].id}`);
        console.log(`Spouse: ${girls[i].spouse.name}\n`);
    }

}());
