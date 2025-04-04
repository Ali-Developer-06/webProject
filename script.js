  //* Interactive hover effect for product cards
  document.querySelectorAll('.product-card').forEach(card => {
      card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
      });
      card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
      });
    });


  //* Hamburger script 
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const mainNav = document.querySelector('.nav-system');
  
  mobileToggle.addEventListener('click', () => {
    const visibility = mainNav.getAttribute('data-visible');
    mainNav.setAttribute('data-visible', visibility === 'true' ? 'false' : 'true');
    mobileToggle.setAttribute('aria-expanded', visibility === 'true' ? 'false' : 'true');
  });


  //* Product Gallery script 
  document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.querySelector('.main-image img');
        thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const thumbImg = this.querySelector('img');
            const newSrc = thumbImg.src;
            mainImage.style.opacity = '0';
            setTimeout(() => {
                mainImage.src = newSrc;
                thumbnails.forEach(thumb => {
                    thumb.classList.remove('active-thumbnail');
                });
                this.classList.add('active-thumbnail');
                mainImage.style.opacity = '1';
            }, 200);
        });
    });
    if (thumbnails.length > 0) {
        thumbnails[0].classList.add('active-thumbnail');
    }
});