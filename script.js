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

    //* Webdite Loader script

    // window.addEventListener('load', function() {
    //     setTimeout(function() {
    //         document.getElementById('loader').classList.add('hidden');
    //         document.getElementById('pageContent').classList.add('loaded');
    //     }, 1000);
    // });

    //* licence plus PDF script
    
    function generatePdf(event, appName) {
        event.preventDefault();
        const form = event.target;
        const formData = {
            name: form.querySelector('[name="name"]').value,
            owner: form.querySelector('[name="owner"]').value,
            street: form.querySelector('[name="street"]').value,
            postal: form.querySelector('[name="postal"]').value,
            telephone: form.querySelector('[name="telephone"]').value,
            email: form.querySelector('[name="email"]').value,
            website: form.querySelector('[name="website"]')?.value || '',
            message: form.querySelector('[name="message"]')?.value || '',
            app: appName
        };
        
        // Open PDF template with form data as URL parameters
        const queryString = new URLSearchParams(formData).toString();
        window.open(`pdf.html?${queryString}`, '_blank');
    }