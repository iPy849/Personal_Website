document.addEventListener('DOMContentLoaded', function () {
    // Ajusta la barra de navegación
    let nav_offset = document.querySelector("nav").offsetTop;

    window.addEventListener('scroll', function(event){
        if (window.pageYOffset > nav_offset){
            document.querySelector("nav").setAttribute('sticky', '');
        }
        else {
            document.querySelector("nav").removeAttribute('sticky');
            
        }
    });

    //Texto de inicio (Typewritter effect)
    let hero_text = document.querySelector(".hero-text");
    let hero_text_index = 0;
    let type_write_effect = setInterval(() => {
        if(hero_text_index < parseInt(hero_text.dataset.text.length)){
            hero_text.innerHTML += hero_text.dataset.text[hero_text_index++];
        }
        else{
            clearInterval(type_write_effect);
        }
    },
    100);

    let send_message_button = document.querySelector("#send_message");
    send_message_button.addEventListener("click", () => {
        let link = "mailto:aleortega849@gmail.com?subject=Hola%Alejandro%20!!!&body=";
        const fix_spaces = function(value){
            for (let i = 0; i < value.length; i++) {
                if(value[i] === ""){
                    value[i] = "%20";
                }
            }
            return value;
        }

        // let text = document.querySelector("#textarea1").value;
        location.href = link + fix_spaces(document.querySelector("#textarea1").value);

    })

    
});