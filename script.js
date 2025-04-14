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
    
    document.getElementById('licenseForm').addEventListener('submit', function(e) {
        e.preventDefault();
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            owner: document.getElementById('owner').value,
            street: document.getElementById('street').value,
            postal: document.getElementById('postal').value,
            telephone: document.getElementById('telephone').value,
            email: document.getElementById('email').value,
            website: document.getElementById('website').value
        };
        // Open PDF generator in new tab with form data as URL parameters
        const queryString = new URLSearchParams(formData).toString();
        window.open(`pdf.html?${queryString}`, '_blank');
    });