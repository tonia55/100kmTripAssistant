'use strict';

/*
1. km, sezonas, svoris, ugis
2. object: sezonas, daiktai
3. nakvyne
*/
const form = document.forms['form'];

const stuff = {
  necessary: ['degtukai', 'vanduo', 'peilis', 'sausas davinys', 'lengvi rūbai'],
  winter: ['šilti rūbai'],
  spring: ['skietis', 'akiniai nuo saulės'],
  summer: ['akiniai nuo saulės', 'apsauginis kremas', 'kepurė'],
  autumn: ['skietis', 'priemonė nuo vabzdžių'],
  other: ['palapinė', 'miegmaišis', 'dantų pasta', 'dantų šepetukas', 'muilas'],
};

document.querySelector('#introBtn').addEventListener('click', function () {
  document.querySelector('#intro').classList.add('hidden');
  document.querySelector('#form').classList.remove('hidden');
});

document.querySelector('#formBtn').addEventListener('click', function () {
  document.querySelector('#form').classList.add('hidden');
  document.querySelector('#list').classList.remove('hidden');
  let name = document.getElementById('inputName').value;
  const age = document.getElementById('inputAge').value;
  const range = document.getElementById('inputRange').value;
  const season = document.getElementById('inputSeason').value;
  const weight = document.getElementById('inputWeight').value;
  const height = document.getElementById('inputHeight').value;
  const kmi = weight / (height * height);
  const kmiInt = kmi.toFixed(0);
  let breaks = 5;
  let nameEnd = name.slice(-2);

  console.log(nameEnd);
  if (nameEnd === 'as') {
    name = name.slice(0, -2) + 'ai';
  } else if (nameEnd === 'us') {
    name = name.slice(0, -2) + 'au';
  } else if (nameEnd === 'is') {
    name = name.slice(0, -2) + 'i';
  }

  if (range >= 50) {
    for (let i = 0; i < stuff.other.length; i++) {
      const newLi = document.createElement('li');
      newLi.textContent = stuff.other[i];
      const parent = document.getElementById('finalList');
      parent.appendChild(newLi);
    }
  }

  const tripStr = `${name}, paskaičiavus jūsų KMI (${kmiInt}) ir atsižvelgus į jūsų pasirinktą sezoną (${season}) paskaičiavome, kad jums prireiks ${breaks} poilsio pertraukų${
    range > 50 ? ', bei vienos nakvynės' : ''
  }. Taip pat sudarėme optimalų sąrašą būtiniausių daiktų, norint nužygiuoti ${range} km: `;

  document.querySelector('#overall').textContent = tripStr;

  if (weight < 50) {
    stuff.necessary[1] = stuff.necessary[1] + ' (2L)';
  } else if (weight > 100) {
    stuff.necessary[1] = stuff.necessary[1] + ' (4L)';
  } else {
    stuff.necessary[1] = stuff.necessary[1] + ' (3L)';
  }

  if (kmi > 30) {
    breaks = 10;
  }

  if (range < 26) {
    stuff.necessary[3] = stuff.necessary[3] + ' (1vnt)';
  } else if (range > 25 && range < 51) {
    stuff.necessary[3] = stuff.necessary[3] + ' (2vnt)';
  } else if (range > 50 && range < 76) {
    stuff.necessary[3] = stuff.necessary[3] + ' (3vnt)';
  } else {
    stuff.necessary[3] = stuff.necessary[3] + ' (4vnt)';
  }

  for (let i = 0; i < stuff.necessary.length; i++) {
    const newLi = document.createElement('li');
    newLi.textContent = stuff.necessary[i];
    const parent = document.getElementById('finalList');
    parent.appendChild(newLi);
  }

  if (season === 'Žiema') {
    for (let i = 0; i < stuff.winter.length; i++) {
      const newLi = document.createElement('li');
      newLi.textContent = stuff.winter[i];
      const parent = document.getElementById('finalList');
      parent.appendChild(newLi);
      document.querySelector('#list').classList.add('winter');
    }
  } else if (season === 'Pavasaris') {
    for (let i = 0; i < stuff.spring.length; i++) {
      const newLi = document.createElement('li');
      newLi.textContent = stuff.spring[i];
      const parent = document.getElementById('finalList');
      parent.appendChild(newLi);
      document.querySelector('#list').classList.add('spring');
    }
  } else if (season === 'Vasara') {
    for (let i = 0; i < stuff.summer.length; i++) {
      const newLi = document.createElement('li');
      newLi.textContent = stuff.summer[i];
      const parent = document.getElementById('finalList');
      parent.appendChild(newLi);
      document.querySelector('#list').classList.add('summer');
    }
  } else if (season === 'Ruduo') {
    for (let i = 0; i < stuff.autumn.length; i++) {
      const newLi = document.createElement('li');
      newLi.textContent = stuff.autumn[i];
      const parent = document.getElementById('finalList');
      parent.appendChild(newLi);
      document.querySelector('#list').classList.add('autumn');
    }
  }
});
