document.addEventListener('DOMContentLoaded',function () {
   
    const video = document.getElementById("miVideo");
    video.currentTime = 0; // Establece el tiempo de inicio en 7 segundos

    let uno = document.getElementById('uno');
    let dos = document.getElementById('dos');
    let tres = document.getElementById('tres');
    let cuatro = document.getElementById('cuatro');
    let cinco = document.getElementById('cinco');
    const btnInicio = document.querySelector('.botones-redondos');

    let bordesParpadeo = document.querySelectorAll('.borde-parpadeante');

    uno.addEventListener('click',function(){
        video.currentTime = 10;
        video.play();
        btnInicio.classList.remove('mostrar');
        bordesParpadeo.forEach(borde => {
            borde.classList.remove('borde-parpadeante');
        })
    })

    dos.addEventListener('click',function(){
        video.currentTime = 29;
        video.play();
        btnInicio.classList.remove('mostrar');
        bordesParpadeo.forEach(borde => {
            borde.classList.remove('borde-parpadeante');
        })
    })

    tres.addEventListener('click',function(){
        video.currentTime = 62;
        video.play();
        btnInicio.classList.remove('mostrar');
        bordesParpadeo.forEach(borde => {
            borde.classList.remove('borde-parpadeante');
        })
    })

    cuatro.addEventListener('click',function(){
        video.currentTime = 81;
        video.play();
        btnInicio.classList.remove('mostrar');
        bordesParpadeo.forEach(borde => {
            borde.classList.remove('borde-parpadeante');
        })
    })

    cinco.addEventListener('click',function(){
        video.currentTime = 101;
        video.play();
        btnInicio.classList.remove('mostrar');
        bordesParpadeo.forEach(borde => {
            borde.classList.remove('borde-parpadeante');
        })
    })


    video.addEventListener('click',function(event){
        event.preventDefault();
    })

    video.addEventListener("timeupdate", function() {

        // if(!video.paused){
        //     video.removeAttribute("controls");
        // }
        let currentTime = video.currentTime;
        
        if(currentTime >= 7.2 && currentTime <= 7.4){
            let botones = document.querySelector('.botones-redondos');
            botones.classList.add('mostrar');
            video.pause();
        }else if(currentTime >= 27.4 && currentTime < 27.6){
            let botones = document.querySelector('#controles');
            botones.classList.add('mostrar');
            video.pause();
        }else if(currentTime >= 61.6 && currentTime < 61.8){
            let botones = document.querySelector('#controles');
            botones.classList.add('mostrar');
            video.pause();
        }else if(currentTime >= 80.7 && currentTime < 80.9){
            let botones = document.querySelector('#controles');
            botones.classList.add('mostrar');
            video.pause();
        }else if(currentTime >= 100.7 && currentTime < 100.9){
            let botones = document.querySelector('#controles');
            botones.classList.add('mostrar');
            video.pause();
        }else if(currentTime >= 121 && currentTime < 121.4){
            let botones = document.querySelector('#controles');
            botones.classList.add('mostrar');
            video.pause();
        }else if(currentTime >= 131){
            let botones = document.querySelector('#controles');
            botones.classList.add('mostrar');
            video.pause();
        }

        
        
    });

    const botonVolver = document.getElementById("volver");
    const botonContinuar = document.getElementById("continuar");

    botonVolver.addEventListener("click", function() {

        let currentTime = video.currentTime;
        
        if(currentTime >= 28 && currentTime < 28.2){
           let bordesParpadeo = document.querySelectorAll('.botones-redondos button');
            bordesParpadeo.forEach(borde => {
                borde.classList.add('borde-parpadeante');
            }) 
           video.currentTime = 7.6;
        }else if(currentTime >= 61.6 && currentTime < 61.8){
            video.currentTime = 27.8;
        }else if(currentTime >= 81 && currentTime < 81.2){
            video.currentTime = 61;
        }else if(currentTime >= 101 && currentTime < 101.2){
            video.currentTime = 81;
        }else if(currentTime >= 121 && currentTime < 121.4){
            video.currentTime = 101;
        }else if(currentTime  >= 131){
            let bordesParpadeo = document.querySelectorAll('.botones-redondos button');
            bordesParpadeo.forEach(borde => {
                borde.classList.add('borde-parpadeante');
            })
            video.currentTime = 0;
        }

        video.play();
        let botones = document.querySelector('#controles');
        botones.classList.remove('mostrar');
    });

    botonContinuar.addEventListener("click", function() {
        video.play();
        let botones = document.querySelector('#controles');
        botones.classList.remove('mostrar');
    });
});
