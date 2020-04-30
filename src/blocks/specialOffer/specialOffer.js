document.addEventListener('DOMContentLoaded', () => {
  const rating = document.querySelectorAll('.js-card-rate__rating');
  rating.forEach((rate) => {
    const count = rate.dataset.rating;
    for (let i = 0; i < 5; i++) {
      let star = document.createElement('span');
      star.classList.add('star');
      if (count - 1 >= i) {
        star.classList.add('star_active');
      }
      rate.appendChild(star);
    }
  });

  const like = document.querySelectorAll('.js-card-controls__like')
  const compare = document.querySelectorAll('.js-card-controls__compare')
  like.forEach(item => {
    item.addEventListener('click', () =>{
      item.classList.toggle('card-controls__like_active')
    })
  })
  compare.forEach(item => {
    item.addEventListener('click', () =>{
      item.classList.toggle('card-controls__compare_active')
    })
  })
});
