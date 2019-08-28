function modal(element) {

  document.querySelector('.modal').style.display = 'block';

  document.querySelector('.modal').insertAdjacentHTML('beforeend', '<span class="close">&times;</span>');

  var myStep = element.children[0].textContent;
  document.querySelector('.modal').insertAdjacentHTML('beforeend', '<p id="step-number-modal">' + myStep + '</p>');

  var myTextBig = element.children[1].textContent;
  document.querySelector('.modal').insertAdjacentHTML('beforeend', '<p class="step-text-modal-big">' + myTextBig + '</p>');

  for (var i = 2; i < element.children.length; i++) {
    switch (element.children[i].tagName) {
      case 'A':
        var myLink = element.children[i].textContent;
        var myLinkHref = element.children[i].href;
        document.querySelector('.modal').insertAdjacentHTML('beforeend', '<p class="step-link-modal"><a href="' + myLinkHref + '" target="blank">' + myLink + '</a></p>');
        break;
      case 'P':
        var myTextMed = element.children[i].textContent;
        document.querySelector('.modal').insertAdjacentHTML('beforeend', '<p class="step-text-modal-medium">' + myTextMed + '</p>');
        break;
      case 'B':
        var myTextBold = element.children[i].textContent;
        document.querySelector('.modal').insertAdjacentHTML('beforeend', '<div class="step-text-modal-bold">' + myTextBold + '</div>');
        break;
      case 'IMG':
        var myImgAlt = element.children[i].alt;
        document.querySelector('.modal').insertAdjacentHTML('beforeend', '<img class="img-modal" src="assets/' + myImgAlt + '.png">');
        break;
      case 'BR':
        document.querySelector('.modal').insertAdjacentHTML('beforeend', '<br>');
        break;
      case "SELECT":
        document.querySelector('.modal').insertAdjacentHTML('beforeend', '<div class="flex"><select id="select"><option value="default">Choisissez...</option><option value="bc">Blockchain</option><option value="bd">Big Data</option><option value="ia">Intelligence artificielle</option><option value="sw">Smart Workplace</option></select><p class="step-text-modal-medium">Votre adresse : <b id="address"></b></p></div>');
        break;
    }
  };

  document.querySelector('.close').addEventListener('click', function() {
    var modal = document.querySelector('.modal');
    modal.classList.add('bot-to-top');
    setTimeout(function() {
      modal.classList.remove('bot-to-top');
      modal.innerHTML = '';
      modal.style.display = 'none';
    }, 600);
  });


  document.getElementById('select').addEventListener('change', function(e) {
    // console.log(e.target.value);
    var userAddress = document.getElementById('address');
    switch (e.target.value) {
      case 'bc':
        userAddress.textContent = "XXXBC"
        break;
      case 'bd':
        userAddress.textContent = "XXXBD"
        break;
      case 'ia':
        userAddress.textContent = "XXXIA"
        break;
      case 'sw':
        userAddress.textContent = "XXXSW"
        break;
    }
  })

}
