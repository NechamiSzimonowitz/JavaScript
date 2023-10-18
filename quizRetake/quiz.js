const boysNames = ["chaim", "moshe", "Aron", "Dovid", "Yosef", "Nachum", "Sruli", "Shmuel", "Dov", "yaakov", "chaim", "moshe", "Aron", "Dovid", "Yosef", "Nachum", "Sruli", "Shmuel", "Dov", "yaakov"];
const boysLastNames = ["Shwartz", "Stern", "Klein", "Rubin", "Ribiat", "Landau", "Goldman", "Kellner", "Smith", "Lederer", "Ausch", "Kupperwasser", "Kesserman", "Pruzansky", "Bak", "Kleinman", "Sternstein", "Basch", "Kagan", "Weinreb", "Reichman", "Schechter", "Asia", "Waldman", "Loeb", "Rothenberg", "Rose", "Ritterman", "Szimano", "Rottenberg", "Stern", "Moskowitz", "Horowitz", "Epstein", "Lerman", "Friedman", "Kaman", "Roth", "Olshin", "Fried"]
const girlsNames = ["sara", "Rivka", "Rochel", "Leah", "Chani", "Leah", "Esty", "Shaina", "Malky", "Blimie", "sara", "Rivka", "Rochel", "Leah", "Chani", "Leah", "Esty", "Shaina", "Malky", "Blimie"];
const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const people = [];
const usedNumber = [];

for (let i = 0; i < 20; i++) {
    let randomChosen = false;
    while (!randomChosen) {
        const randomNumber = Math.floor(Math.random() * 20) + 1;
        for (let j = 0; j < usedNumber.length; j++) {
            if (randomNumber == usedNumber[j]) {
                randomChosen = false;
            }
            else {
                randomChosen = true;
            }
        }
    }
    usedNumber[i] = randomNumber;
    people[i] = {
        name: boysNames[randomNumber],
        lastName: boysLastNames[randomNumber],
        gender: "male",
        id: ids[i + 1],
        spouse: girlsNames[randomNumber]
    };
    console.log(people[i].name, people[i].lastName, people[i].gender, people[i].spouse);
};