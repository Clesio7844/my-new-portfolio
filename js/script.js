//Portfolio Item Filter

const filterContainer = document.querySelector('.portfolio-filter'),
  filterBtns = filterContainer.children,
  totalFilterBtn = filterBtns.length,
  portfolioItem = document.querySelectorAll('.portfolio-item'),
  totalPortfolioItem = portfolioItem.length;

for (let i = 0; i < totalFilterBtn; i++) {
  filterBtns[i].addEventListener('click', function() {
    filterContainer.querySelector('.active').classList.remove('active');
    this.classList.add('active');

    const filterValue = this.getAttribute('data-filter');
    for (let k = 0; k < totalPortfolioItem; k++) {
      if (filterValue === portfolioItem[k].getAttribute('data-category')) {
        portfolioItem[k].classList.remove('hiden');
        portfolioItem[k].classList.add('show');
      } else {
        portfolioItem[k].classList.remove('show');
        portfolioItem[k].classList.add('hiden');
      }
      if (filterValue === 'all') {
        portfolioItem[k].classList.remove('hiden');
        portfolioItem[k].classList.add('show');
      }
    }
  });
}

//portfolio lightbox
const lightbox = document.querySelector('.lightbox'),
  lightboxImage = lightbox.querySelector('.lightbox-img'),
  lightboxClose = lightbox.querySelector('.lightbox-close'),
  lightboxText = lightbox.querySelector('.caption-text'),
  lightboxCounter = lightbox.querySelector('.caption-counter');

let itemIndex = 0;

for (let i = 0; i < totalPortfolioItem; i++) {
  portfolioItem[i].addEventListener('click', function() {
    itemIndex = i;
    changeItem();
    toggleLightbox();
  });
}

function nextItem() {
  if (itemIndex === totalPortfolioItem - 1) {
    itemIndex = 0;
  } else {
    itemIndex++;
  }
  changeItem();
}

function prevItem() {
  if (itemIndex === 0) {
    itemIndex = totalPortfolioItem - 1;
  } else {
    itemIndex--;
  }
  changeItem();
}

function toggleLightbox() {
  lightbox.classList.toggle('open');
}

function changeItem() {
  imgSrc = portfolioItem[itemIndex]
    .querySelector('.portfolio-img img')
    .getAttribute('src');
  lightboxImage.src = imgSrc;
  lightboxText.innerHTML = portfolioItem[itemIndex].querySelector(
    'h4'
  ).innerHTML;
  lightboxCounter.innerHTML = itemIndex + 1 + ' of ' + totalPortfolioItem;
}

// close lightbox

lightbox.addEventListener('click', function(event) {
  if (event.target === lightboxClose || event.target === lightbox) {
    toggleLightbox();
  }
});
