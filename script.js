// 20 drivers 
const driver = ['Max Verstappen', 'Sergio Perez', 'George Russel', 'Lewis Hamilton', 'Charles Leclerc', 'Carlos Sainz', 'Fernandro Alonso', 'Lance Stroll', 'Yuki Tsunoda', 'Nyck De Vries', 'Esteban Ocon', 'Pierre Gasly', 'Lando Norris', 'Oscar Piastri', 'Valtteri Bottas', 'Zhou Guanyu', 'Kevin Magnussen', 'Nico Hulkenberg', 'Alexander Albon', 'Logan Sargeant'];
// 20 events 
const driverEvent = ['crash', 'DNF', 'yell in radio', 'win', 'complain', 'get penalty', 'get podium', 'collide with someone', 'overtake teammate', 'hit wall', 'lock brakes', 'get points', 'get fastest lap', 'lose element of the car', 'get brilliant overtake', 'get slow pitstop', 'fail at the start', 'spin', 'retire', 'get sick'];
// 23 races
const race = ['Bahrain', 'Saudi Arabia', 'Australia', 'Azerbaijan', 'Miami', 'Emilia Romagna', 'Monaco', 'Spain', 'Canada', 'Austria', 'Britain', 'Hungary', 'Belgium', 'Netherlands', 'Italy', 'Singapore', 'Japan', 'Qatar', 'USA', 'Mexico', 'Brazil', 'Las Vegas', 'Abu Dhabi'];


const getRandomElement = array => {
    return Math.floor(Math.random() * array.length);
};

const getRandomMessage = () => {
   return `${driver[getRandomElement(driver)]} will ${driverEvent[getRandomElement(driverEvent)]} in ${race[getRandomElement(race)]}.`;
};

console.log(getRandomMessage());