let readlineSync = require('readline-sync');
let answers = [`yes`, ` no `];
console.log(`You find yourself in a dimly lit room.  The smell of cigar smoke fills the air.  As your eyes adjust to the dark you begin to recognize the man in front of you.  Lucky Luciano, the head of the Luciano family.  He basically runs lower Manhattan!  What could he possibly want from you?!  He leans forward and asks`);
const userName = readlineSync.question(`What's your name son? `);
console.log(`Pleasure to meet you ` + userName);
console.log(`Lucky Luciano leans back and takes a drawn out drag from his cigar. I need a favor from you ` + userName + `, You think you're up for it?`);
let madeWrongChoice = true;
while (madeWrongChoice) {
    let userInput = readlineSync.question("What do you want to do? " + answers);
    if (userInput.trim().toLowerCase() === `no`)
        console.log(`You don't say no to Lucky Luciano`);
    else {
        madeWrongChoice = false;
    }
}
console.log(`I knew you would make the right choice kid.  This could be a lucrative deal for the both of us `);
console.log(`Where are my manners? What are you drinking ` + userName);
drinks = ['beer', 'whiskey on the rocks', 'vodka tonic', 'scotch'];
index = readlineSync.keyInSelect(drinks, 'Which drink do you want? ');
console.log(`Lucky Luciano yells Ralph get this man a ` + drinks[index] + `. He laughs and says I'm more of a Gin guy myself.`);
readlineSync.keyIn("Press any key to continue...");
console.clear();
console.log(`Lets cut to the chase ` + userName + ` an aquaintance of mine owes me a lot of money and refuses to pay.  I need you to break into his house and steal me a diamond he's been holding onto for a rainy day.`);
console.log(`Everything else of value in the house is yours.  Oh and by the way, this conversation never happened. If you get caught by the police, you are on your own. Good luck!`);
console.log(`Here take one of these tools, they could prove useful`);
tools = ['crowbar', 'screw-driver', 'hammer', 'lock-picker'];
index = readlineSync.keyInSelect(tools);
console.log('Ok, ' + tools[index] + ' nice choice! and again pleasure doing business with you ' + userName);
readlineSync.keyIn("Press any key to continue...");
console.clear();
console.log(`----------------------------------------------------------------------------------`);
console.log(`----------------------------------------------------------------------------------`);
console.log(`----------------------------------------------------------------------------------`);
console.log(`----------------------------------------------------------------------------------`);
console.log(`----------------------------------------------------------------------------------`);
console.log(`Darkness falls over the city`);
console.log(`You are outside of the house Lucky Luciano wants you to rob.  No one seems to be home.  It's now or never!`);
console.log("What do you want to do?");
let wrongDecision = true;
while (wrongDecision) {
    let option = readlineSync.question("Options: look around, use your tool, run away ");
    switch (option.toLowerCase()) {
        case "look around":
            console.log("No one appears to be in the house");
            break;
        case "use your tool":
            wrongDecision = false;
            console.log("You use the " + tools[index] + " on the front door, that was easy.  Too easy");
            break;
        case "run away":
            console.log("You can't run, Lucky Luciano isn't someone to mess with");
            break;
        default:
            console.log("Please input proper command");
    }
}
readlineSync.keyIn("Press any key to continue...");
console.clear();
console.log(`You find yourself in the front room of a filthy home.  The owner obviously hasn't cleaned the place in years.`);
let wrongDecision1 = true;
while (wrongDecision1) {
    let option = readlineSync.question("Options: living room, upstairs bedroom, basement   ");
    switch (option.toLowerCase()) {
        case "basement":
            console.log("lets stick to one of these upper rooms first, we need to be efficient");
            break;
        case "living room":
            wrongDecision1 = false;
            console.log("You head to the living room.  Let's find this diamond and get out of here already");
            break;
        case "upstairs bedroom":
            console.log("Don't get ahead of yourself the living room is right here");
            break;
        default:
            console.log("Please input proper command");
    }
}
readlineSync.keyIn("Press any key to continue...");
console.clear();
console.log("The living-room is riddled with boxes of junk and dirty magazines.  Hardly anything of value in this dump you think to yourself.");
readlineSync.keyIn("Press any key to continue...");
console.clear();
console.log("You begin to feel uneasy.  He may be home soon.  Let's hurry and check another room!");
let wrongDecision2 = true;
while (wrongDecision2) {
    let option = readlineSync.question("Options: living room, upstairs bedroom, basement ");
    switch (option.toLowerCase()) {
        case "basement":
            console.log("lets stick to one of these upper rooms first, we need to be efficient");
            break;
        case "living room":
            console.log("You're in the living room already! Focus " + userName);
            break;
        case "upstairs bedroom":
            wrongDecision2 = false;
            console.log("You run up the stairs and into the upstairs bedroom.  Maybe we'll have better luck in here");
            break;
        default:
            console.log("Please input proper command");
    }
}
readlineSync.keyIn("Press any key to continue...");
console.clear();
console.log("The upstairs bedroom smells like wet dog crossed with stale cigarettes.  Your eyes begin to water from the stench.  Let's hurry up and search this place.");
console.log(`You notice a safe in the corner of the room.  Jackpot!!!!`);
console.log('What do you want to do?');
let wrongDecision3 = true;
while (wrongDecision3) {
    let option = readlineSync.question("Options: go back downstairs, use tool, pick up safe ");
    switch (option.toLowerCase()) {
        case "go back downstairs":
            console.log("You're really going to ignore the safe, don't be a fool");
            break;
        case "use tool":
            wrongDecision3 = false;
            console.log("you pull out your " + tools[index] + " and open the safe!");
            break;
        case "pick up safe":
            console.log("that safe has to weigh over 200lb's bub, you'd be better off trying to crack it!");
            break;
        default:
            console.log("Please input proper command");
    }
}
console.log("You look inside the safe and can't believe your eyes!");
readlineSync.keyIn("Press any key to continue...");
console.clear();
console.log("The safe is completely empty.  Talk about a let down.  You begin to wonder if there is even a diamond in the first place");
console.log("What do you want to do now?");
let wrongDecision4 = true;
while (wrongDecision4) {
    let option = readlineSync.question("Options: search basement, inspect the safe again, run away ");
    switch (option.toLowerCase()) {
        case "search basement":
            wrongDecision4 = false;
            console.log("You sprint down to the basement, You're running out of time!!!");
            break;
        case "inspect the safe again":
            console.log("definitely empty bub, get going!!!");
            break;
        case "run away":
            console.log("Your job isn't done here!");
            break;
        default:
            console.log("Please input proper command");
    }
}
readlineSync.keyIn("Press any key to continue...");
console.clear();
console.log("as you run down the basement stairs you trip over an object.  If you thought the rest of the house was dirty, the basement is a disaster.  You don't even know where to begin looking.");
let commands = ["inspect object, look around, turn back, search another room"];
let hasDiamond = true;
let madeRightChoiceFour = true;
while (madeRightChoiceFour) {
    let userInput = readlineSync.question(`What do you want to do? ${commands.toString()} `);
    if (userInput.trim().toLowerCase() === "look around") {
        console.log("There's nothing worth value in this basement");
    }
    else if (userInput.trim().toLowerCase() === "turn back") {
        madeRightChoiceFour = false;
        hasDiamond = true;
        console.log("Let's get out of here and report back to Lucky Luciano. I'm sure he will understand why we couldn't find the diamond.");
    }
    else if (userInput.trim().toLowerCase() === "search another room") {
        console.log("There are no more rooms to search");
    }
    else if (userInput.trim().toLowerCase() === "inspect object") {
        madeRightChoiceFour = false;
        hasDiamond = false;
        console.log("You found the diamond!!!");
        console.log("Let's get out of here ");
    } else if (!commands.includes(userInput.trim().toUpperCase())) {
        console.log("INVALID COMMAND");
    }  else {
        madeRightChoiceSeven = false;
    }
}
readlineSync.keyIn("Press any key to continue...");
console.clear();
console.log(`----------------------------------------------------------------------------------`);
console.log(`----------------------------------------------------------------------------------`);
console.log(`----------------------------------------------------------------------------------`);
console.log(`----------------------------------------------------------------------------------`);
console.log(`----------------------------------------------------------------------------------`);
console.log("You sit before Lucky Luciano.  It's been a crazy night.  He leans forward from his chair and begins talking ");
console.log(userName + " Good to see you made it out in one piece.  So where's my diamond???");
readlineSync.keyIn("Press any key to continue...");
console.clear();
console.log("You shift in your chair nervously.  The man before you was about to make or break you");
let commands2 = "hand over diamond, couldn't find diamond, make up an excuse, bribe him";
let madeRightChoiceSeven = true;
while (madeRightChoiceSeven) {
    let userInput = readlineSync.question(`What Do You Want To Do? ${commands2.toString()} `);
    if (userInput.trim().toLowerCase() === "couldn't find diamond") {
        console.log("Very funny " + userName + ", now where's the diamond???");
    }
    else if (userInput.trim().toLowerCase() === "make up an excuse") {
        console.log("Lucky Luciano is becoming angry.  Hurry hand over the diamond!!");
    }
    else if (userInput.trim().toLowerCase() === "bribe him") {
        console.log("You want to bribe Lucky Luciano? Don't be a fool.  Hand it over!");
    }
    else if (userInput.trim().toLowerCase() === "hand over diamond") {
        if (hasDiamond == false) {
            console.log("Good work " + userName + " Here's a little something for your trouble");
            console.log("Lucky Luciano hands over $10,000.  Congratulations you won!");
            madeRightChoiceSeven = false;
        }
        else {
            hasDiamond == true;
            console.log("So you came back empty handed huh? Ralph make sure " + userName + " is sleeping with the fishes by morning!");
            console.log("You have lost the Game");
            madeRightChoiceSeven = false;
        }
    } else if (!commands.includes(userInput.trim().toUpperCase())) {
        console.log("INVALID COMMAND");
    }
    else {
        madeRightChoiceSeven = false;
    }
}
