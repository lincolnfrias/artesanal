// checkbox

var checkBox = document.querySelector('input');
var para1 = document.querySelector('.p1');
var condicao = false;

checkBox.addEventListener('change',function() {
  checkBox.disabled = true;
  condicao = true;
  atualizaResultado();
});

function atualizaResultado() {
  if(condicao === true) {
    var resultado = 10;
  } else {
    var resultado = 5;
  }

  para1.textContent = 'O resultado é ' + resultado + ', meus queridos.';
}

atualizaResultado();

// dropdown

var select = document.querySelector('select');
var para2 = document.querySelector('.p2');

select.addEventListener('change', setWeather);

function setWeather() {
  var choice = select.value;

  if (choice === 'sunny') {
    para2.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
  } else if (choice === 'rainy') {
    para2.textContent = 'Rain is falling outside; take a rain coat and a brolly, and don\'t stay out for too long.';
  } else if (choice === 'snowing') {
    para2.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
  } else if (choice === 'overcast') {
    para2.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
  } else {
    para2.textContent = '';
  }
}


// tema

var select = document.querySelector('.seletor2');
var p3 = document.querySelector('.p3');

function update(bgColor, textColor) {
  p3.style.backgroundColor = bgColor;
  p3.style.color = textColor;
}

// ternary operator, trocar por if else
select.onchange = function() {
  ( select.value === 'black' ) ? update('black','white') : update('white','black');
}
