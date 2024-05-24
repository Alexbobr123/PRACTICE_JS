let field = document.querySelector('#field');
let message = document.querySelector('#message');
let cities = [];
function checkCity(city) {
  if (cities.length === 0) {
    cities.push(city);
    return true;
  } else {
    let lastCity = cities[cities.length - 1];
    if (city[0].toLowerCase() === lastCity[lastCity.length - 1].toLowerCase() && !cities.includes(city)) {
      cities.push(city);
      return true;
    } else {
      return false;
    }
  }
}
field.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    let inputCity = field.value.trim();
    if (inputCity === '') {
      message.textContent = 'Введите название города';
    } else if (!/^[a-zA-Z]+$/.test(inputCity)) {
      message.textContent = 'Название города должно содержать только буквы';
    } else {
      if (checkCity(inputCity)) {
        message.textContent = 'Город принят. Следующий ход.';
      } else {
        message.textContent = 'Этот город уже был или не подходит. Попробуйте другой.';
      }
    }
    field.value = '';
  }
});

// игра в города

// let field = document.querySelector('#field');
// let message = document.querySelector('#message');
// let playerCities = [];
// let robotCities = [];
// let allCities = ['moscow', 'istra', 'paris', 'anapa', 'sochi', 'tokio', 'pekin', 'rio', 'lissabon' ]; 
// function checkCity(city, cities) {
//   if (cities.length === 0) {
//     cities.push(city);
//     return true;
//   } else {
//     let lastCity = cities[cities.length - 1];
//     if (city[0].toLowerCase() === lastCity[lastCity.length - 1].toLowerCase() && !cities.includes(city)) {
//       cities.push(city);
//       return true;
//     } else {
//       return false;
//     }
//   }
// }
// function robotTurn() {
//   let lastPlayerCity = playerCities[playerCities.length - 1];
//   let possibleCities = allCities.filter(city => !playerCities.includes(city) && !robotCities.includes(city) && city[0].toLowerCase() === lastPlayerCity[lastPlayerCity.length - 1].toLowerCase());
//   if (possibleCities.length > 0) {
//     let chosenCity = possibleCities[Math.floor(Math.random() * possibleCities.length)];
//     robotCities.push(chosenCity);
//     message.textContent = chosenCity;
//   } else {
//     message.textContent = 'Робот не может найти подходящий город. Вы победили!';
//     field.removeEventListener('keypress', handlePlayerTurn);
//   }
// }
// function handlePlayerTurn(e) {
//   if (e.key === 'Enter') {
//     let inputCity = field.value.trim();
//     if (inputCity === '') {
//       message.textContent = 'Введите название города';
//     } else if (!/^[a-zA-Z]+$/.test(inputCity)) {
//       message.textContent = 'Название города должно содержать только буквы';
//     } else {
//       if (checkCity(inputCity, playerCities)) {
//         message.textContent = 'Город  принят. Ход робота.';
//         field.value = '';
//         robotTurn();
//       } else {
//         message.textContent = 'Этот город уже был или не подходит. Попробуйте другой.';
//       }
//     }
//   }
// }
// field.addEventListener('keypress', handlePlayerTurn);