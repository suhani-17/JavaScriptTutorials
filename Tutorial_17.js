current_number = 0

function increaseCount() {
  current_number = current_number + 1;
  document.getElementById('number').innerHTML = current_number;
}

function decreaseCount() {
  current_number = current_number - 1;
  document.getElementById('number').innerHTML = current_number;
}