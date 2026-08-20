const observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry)=> {
        if (entry.isIntersecting){
            if (entry.target.classList.contains('hidden')){
                entry.target.classList.add('show')
            }
            else if (entry.target.classList.contains('services-hidden')){
                entry.target.classList.add('services-show')
            }
            else if (entry.target.classList.contains('clients-hidden')){
                 entry.target.classList.add('clients-show')
            }
            else if ( entry.target.classList.contains('clients-interest-hidden')){
                 entry.target.classList.add('clients-interest-show')
            }
            else if (entry.target.classList.contains('testimonial-left-hidden')){
                entry.target.classList.add('testimonial-show')
            }
            else if (entry.target.classList.contains('testimonial-right-hidden')){
                entry.target.classList.add('testimonial-show')
            }
            else if (entry.target.classList.contains('testimonial-hidden')){
                entry.target.classList.add('testimonial-show')
            }
            else if (entry.target.classList.contains('message-hidden')){
                entry.target.classList.add('message-show')
            }
           
        }

    })
})
function activateObserver(elementList){
    elementList.forEach((element)=> {
        observer.observe(element)
    })
}
const hiddenElements = document.querySelectorAll('.hidden')
const servicesHiddenElements = document.querySelectorAll('.services-hidden')
const clientsHiddenElements = document.querySelectorAll('.clients-hidden')
const clientsInterestHiddenElements = document.querySelectorAll('.clients-interest-hidden')
const testimonialLeftHidden = document.querySelectorAll('.testimonial-left-hidden')
const testimonialrightHidden = document.querySelectorAll('.testimonial-right-hidden')
const testimonialHidden = document.querySelectorAll('.testimonial-hidden')
const messageHidden = document.querySelectorAll('.message-hidden')
activateObserver(hiddenElements)
activateObserver(servicesHiddenElements)
activateObserver(clientsHiddenElements)
activateObserver(clientsInterestHiddenElements)
activateObserver(testimonialLeftHidden)
activateObserver(testimonialrightHidden)
activateObserver(testimonialHidden)
activateObserver(messageHidden)