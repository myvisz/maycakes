let menubar = document.querySelector('#menu-bar')
let nav = document.querySelector('.navbar')

menubar.onclick = () =>{
    menubar.classlist.toggle('fa-times')
    nav.classlist.toggle('active')



}


const sr = ScrollReveal ({
    distance : '45px' ,
    duration : 2700,
    reset : true,
    })

    sr.reveal('.myimageabout',{ delay:350, origin:'left' })
    sr.reveal('.about-text-content',{ delay:350, origin:'right' })
    sr.reveal('.home-image',{ delay:350, origin:'left' })
    sr.reveal('.home-text-content',{ delay:350, origin:'right' })


    sr.reveal('.quality-content',{ delay:350, origin:'left' })
    sr.reveal('.quality-image',{ delay:350, origin:'right' })
    sr.reveal('.gallery-image',{ delay:350, origin:'top' })
    sr.reveal('.menu-cake-content',{ delay:350, origin:'top' })
    sr.reveal('.menu-cake-text',{ delay:350, origin:'bottom' })

    
    