    //* Interactive hover effect for product cards
    // document.querySelectorAll('.product-card').forEach(card => {
    //     card.addEventListener('mouseover', () => {
    //     card.style.transform = 'scale(1.05)';
    // });
    //     card.addEventListener('mouseout', () => {
    //     card.style.transform = 'scale(1)';
    //     });
    // });

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

    function generatePDFAndRedirect() {
        const form = document.forms[0];
        const name = form.querySelector('[name="name"]').value;
        const owner = form.querySelector('[name="owner"]').value;
        const street = form.querySelector('[name="street"]').value;
        const postal = form.querySelector('[name="postal"]').value;
        const telephone = form.querySelector('[name="telephone"]').value;
        const email = form.querySelector('[name="email"]').value;
        const website = form.querySelector('[name="website"]').value || '';

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        doc.text(`Name: ${name}`, 10, 10);
        doc.text(`Owner: ${owner}`, 10, 20);
        doc.text(`Street: ${street}`, 10, 30);
        doc.text(`Postal Code: ${postal}`, 10, 40);
        doc.text(`Telephone: ${telephone}`, 10, 50);
        doc.text(`Email: ${email}`, 10, 60);
        doc.text(`Website: ${website}`, 10, 70);

        doc.save('License_Request.pdf');
        sessionStorage.setItem('orderSent', 'true');

        const subject = `License Request for ${name}`;
        const body = `Dear Sir,  
                I am attaching the requested PDF for the license request. Please take a look at the details whenever you get a chance. Thank you for your attention to this matter. If you need any more information, please don't hesitate to contact us. Best regards`;

        setTimeout(function() {
            const mailtoLink = `mailto:wbsoft@web.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.location.href = mailtoLink;
        }, 1000);
    }

    window.onload = function() {
        if (sessionStorage.getItem('orderSent') === 'true') {
            alert('Order Sent');
            sessionStorage.removeItem('orderSent'); // Remove the flag
        }
    }

    //* Img Carousel

        const carouselImages = document.querySelector('.carousel-images');
        const carImages = document.querySelectorAll('.carousel-images img');
        const leftBtn = document.querySelector('.left-btn');
        const rightBtn = document.querySelector('.right-btn');
        const heading = document.getElementById('carouselHeading');
        const carHeadings = [
            'Menu',
            'Landes-Info',
            'Packliste',
            'Unterkunft',
            'Ortssuche'
        ];
        let index = 0;
        function showImage() {
            carouselImages.style.transform = `translateX(${-index * 250}px)`;
            heading.textContent = carHeadings[index];
        }
        leftBtn.addEventListener('click', () => {
            index = (index - 1 + carImages.length) % carImages.length;
            showImage();
        });
        rightBtn.addEventListener('click', () => {
            index = (index + 1) % carImages.length;
            showImage();
        });