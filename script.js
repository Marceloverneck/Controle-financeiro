const form = document.getElementById('form');
const descricao = document.getElementById('descricao');
const valor = document.getElementById('valor');
const lista = document.getElementById('lista');
const totalSpan = document.getElementById('total');

let total = 0;

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const desc = descricao.value;
  const val = parseFloat(valor.value);

  if (!desc || isNaN(val)) return;

  const li = document.createElement('li');
  li.innerText = `${desc}: R$ ${val.toFixed(2)}`;
  lista.appendChild(li);

  total += val;
  totalSpan.innerText = total.toFixed(2);

  descricao.value = '';
  valor.value = '';
});
