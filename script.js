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


  //* Order Page script 

    document.addEventListener('DOMContentLoaded', function() {
        const paymentMethods = document.querySelectorAll('.payment-method');
        const paypalForm = document.getElementById('paypalForm');
        const bankTransferForm = document.getElementById('bankTransferForm');
            paymentMethods.forEach(method => {
            method.addEventListener('click', function() {
                paymentMethods.forEach(m => m.classList.remove('selected'));
                this.classList.add('selected');
                const methodType = this.dataset.method;
                paypalForm.style.display = 'none';
                bankTransferForm.style.display = 'none';
                if (methodType === 'credit-card') {
                    creditCardForm.style.display = 'block';
                } else if (methodType === 'paypal') {
                    paypalForm.style.display = 'block';
                } else if (methodType === 'bank-transfer') {
                    bankTransferForm.style.display = 'block';
                }
            });
        });
        const agreeCheckbox = document.getElementById('agreeTerms');
        const completeOrderBtn = document.getElementById('completeOrderBtn');
        agreeCheckbox.addEventListener('change', function() {
            completeOrderBtn.disabled = !this.checked;
        });
        completeOrderBtn.addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('orderFormContainer').style.display = 'none';
            document.getElementById('confirmationSection').style.display = 'block';
            document.querySelectorAll('.step')[1].classList.remove('active');
            document.querySelectorAll('.step')[1].classList.add('completed');
            document.querySelectorAll('.step')[2].classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });


  //* Contact Page script

    document.addEventListener('DOMContentLoaded', function() {
        const contactForm = document.querySelector('.contact-form');
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    });


    //* Webdite Loader script

    // window.addEventListener('load', function() {
    //     setTimeout(function() {
    //         document.getElementById('loader').classList.add('hidden');
    //         document.getElementById('pageContent').classList.add('loaded');
    //     }, 1000);
    // });