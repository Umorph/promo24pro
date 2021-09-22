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
// testWebP(function (support) {
//   if (support === true) {
//     document.querySelector('body').classList.add('webp');
//   }else{
//     document.querySelector('body').classList.add('no-webp');
//   }
// });

//toggle burger menu
const burgerButton = document.querySelector('.anchor-nav__burger-button'),
  burgerWindow = document.querySelector('.anchor-nav__nav-list')

burgerButton.addEventListener('click', () => {
  toggleOpenedClass(burgerWindow)
  toggleOpenedClass(burgerButton)
})

//close burger window after click
const anchorLinks = document.querySelectorAll('.anchor-nav__link')

anchorLinks.forEach((link) => {
  link.addEventListener('click', () => {
    toggleOpenedClass(burgerWindow)
    toggleOpenedClass(burgerButton)
  })
})

// work with animation

const animatedItems = document.querySelectorAll('.animated')

function offset(el) {
  const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop
  return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
}

if (animatedItems.length > 0) {
  window.addEventListener('scroll', animationOnScroll)

  function animationOnScroll( ) {
    animatedItems.forEach((item) => {
      const itemHeight = item.offsetHeight,
        itemOffset = offset(item).top,
        animationRatio = 4

      let animationPoint = window.innerHeight - itemHeight / animationRatio

      if (itemHeight > window.innerHeight) {
        animationPoint = window.innerHeight - window.innerHeight / animationRatio
      }

      if ((pageYOffset > itemOffset - animationPoint) && pageYOffset < (itemOffset + itemHeight)) {
        item.classList.add('anim-active')
      } else {
        item.classList.remove('anim-active')
      }
    })
  }

  animationOnScroll()
}
