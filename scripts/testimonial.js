const clientWrapper = document.querySelectorAll('.client-image-wrapper')
const indicatorCircle = document.querySelectorAll('.indicator-circle')
let selectedIndex;
const card = document.querySelector('.testimonial-card')
clientWrapper.forEach((wrapper, i)=> {
    console.log(i)
    selectedIndex = i
    wrapper.addEventListener('click', ()=> {
        clientWrapper.forEach((wrapper)=> {
            if (wrapper.classList.contains('selected-client-image-wrapper')){
                wrapper.classList.remove('selected-client-image-wrapper')
            }
        })
        

        wrapper.classList.add('selected-client-image-wrapper')
        indicatorCircle.forEach((circle)=> {
            if (circle.classList.contains('selected-indicator-circle')){
                circle.classList.remove('selected-indicator-circle')
            }
        })
        indicatorCircle[i].classList.add('selected-indicator-circle')
        indicatorCircle[i+3].classList.add('selected-indicator-circle')

        if (i === 0){
        card.innerHTML = ` <div class="testimonial-top-card">
                            <img src="images/quotation-mark-svgrepo-com.svg" class="testimonial-quote-mark">
                            <img src="images/three-star.svg" class="testimonial-rating">
                        </div>
                        <p class="testimonial-review-text">Over the past years SEGAL has been providing reliable and affordable services to our company. we appreciate the services offered and looking forward to building a strong relationship with the company.</p>
                        <div class="testimonial-underline"></div>
                        <div class="testimonial-card-info">
                            <div class="left-testimonial-card-info">
                                <div class="card-info-wrapper">
                                     <img src="images/Logo_Monrovia_Breweries.png"  class="testimonial-card-logo">
                                </div>
                            </div>
                            <div class="right-testimonial-card-info">
                                <p class="testimonial-card-name">Monrovia Breweries Inc.</p>
                                <p class="testimonial-card-role">Coporate Client</p>
                            </div>
                        </div>
                </div>`
    }
    else if (i === 1){
        card.innerHTML = `<div class="testimonial-top-card">
                            <img src="images/quotation-mark-svgrepo-com.svg" class="testimonial-quote-mark">
                            <img src="images/three-star.svg" class="testimonial-rating">
                        </div>
                        <p class="testimonial-review-text">The management of the Security Expert Guard Agency of Liberia have been working tirelessly in insuring That the Ecobank of Liberia receives quality security services at our banks. Thank You SEGAL!</p>
                        <div class="testimonial-underline"></div>
                        <div class="testimonial-card-info">
                            <div class="left-testimonial-card-info">
                                <div class="card-info-wrapper">
                                     <img src="images/Ecobank_Logo.svg.png"  class="testimonial-card-logo">
                                </div>
                            </div>
                            <div class="right-testimonial-card-info">
                                <p class="testimonial-card-name">ECOBANK LIBERIA</p>
                                <p class="testimonial-card-role">Coporate Client</p>
                            </div>
                        </div>
                </div>`
    }
    else if(i === 2){
        card.innerHTML = `<div class="testimonial-top-card">
                            <img src="images/quotation-mark-svgrepo-com.svg" class="testimonial-quote-mark">
                            <img src="images/three-star.svg" class="testimonial-rating">
                        </div>
                        <p class="testimonial-review-text">SEGAL has helped the ArcelorMittal Liberia in providing security services over the past few years. We appreciate your services, and we are willing to strengthen the relationship between the firm and the company.</p>
                        <div class="testimonial-underline"></div>
                        <div class="testimonial-card-info">
                            <div class="left-testimonial-card-info">
                                <div class="card-info-wrapper">
                                     <img src="images/Arcelor_Mittal.svg.png"  class="testimonial-card-logo">
                                </div>
                            </div>
                            <div class="right-testimonial-card-info">
                                <p class="testimonial-card-name">ARCELORMITTAL LIBERIA</p>
                                <p class="testimonial-card-role">Coporate Client</p>
                            </div>
                        </div>
                </div>`
    }
    })
})
console.log(card)