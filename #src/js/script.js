// Checking webp support
function testWebP(callback) {
  let webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height === 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

// toggle class --opened for element
function toggleOpenedClass(element) {
  const openedClass = element.classList[0] + '--opened'
  if (element.classList.contains(openedClass)) {
    element.classList.remove(openedClass)
  } else {
    element.classList.add(openedClass)
  }
}

// adds class webp for body, if browser support
testWebP(function (support) {
  if (support === true) {
    document.querySelector('body').classList.add('webp');
  }else{
    document.querySelector('body').classList.add('no-webp');
  }
});

//toggle burger menu
const burgerButton = document.querySelector('.anchor-nav__burger-button'),
  burgerWindow = document.querySelector('.anchor-nav__nav-list')

burgerButton.addEventListener('click', () => {
  toggleOpenedClass(burgerWindow)
  toggleOpenedClass(burgerButton)
})
