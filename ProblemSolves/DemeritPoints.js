// speed limit = 70
// for every 5 kmh more than 70 will get 1 demerit point
// will use math.floor
// more than 12 points == license suspended

function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;

    if (speed <=speedLimit) return 'ok';

    // calculating demerit points

    const demeritPoints = Math.floor((speed-speedLimit)/kmPerDemeritPoint);

    if (demeritPoints >=12) return 'Licence suspended'

    return `Total demerit Point: ${demeritPoints}`;

}

const check = checkSpeed(100);
console.log(check) // output : license suspended