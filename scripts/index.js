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
activateObserver(hiddenElements)
activateObserver(servicesHiddenElements)
activateObserver(clientsHiddenElements)
activateObserver(clientsInterestHiddenElements)
