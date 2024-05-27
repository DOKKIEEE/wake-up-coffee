let testimonialHTML ='';

console.log(testimonialHTML);

testimonials.forEach((person) => {
    testimonialHTML += `
    <div class="testimonial-container">
        <p>${person.testimonial}</p>
        <img class="testimonial-photo" src="${person.image}" alt="">
        <h3>${person.name}</h3>
    </div>
    `;

    document.querySelector('.js-testimonial-display').innerHTML = testimonialHTML;

});
