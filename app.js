const open =document.getElementById('open');
const close=document.getElementById('close')
const nav=document.getElementById('responsive-nav');



	document.addEventListener( 'DOMContentLoaded', function () {
		new Splide( '.splide', {
            direction: 'rtl',
            perPage  : 3,
        } ).mount();
	} );

function openHandler(){
    
    nav.classList.toggle('visible');
}


function closeHandler(){
    openHandler();
}

open.addEventListener('click',openHandler);
close.addEventListener('click',closeHandler);