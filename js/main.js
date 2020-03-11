(function () {

  var buttonOne = document.querySelector('button');

  var buttonTwo = document.querySelector('.button-success')

  var buttonThree = document.querySelector('.button-warning')

  document.addEventListener('click', function(event) {

    if (event.target === buttonOne) {

       buttonOne.classList.toggle('button-danger');
    }
    if (event.target === buttonTwo) {

      buttonTwo.innerText = 'You clicked Me!';
    }

    if (event.target === buttonThree) {

      buttonTwo.innerText = 'button two';
    }
  });

})();
