document.addEventListener('DOMContentLoaded', function () {
    var parallax = M.Parallax.init(
        document.querySelectorAll('.parallax')
    );

    var collapsible = M.Collapsible.init(
        document.querySelectorAll('.collapsible')
    );

    var navbar = M.Sidenav.init(
        document.querySelectorAll('.sidenav')
    );

    ScrollOut({
        targets: ["[scrollout]"],
        once: true,
    });
    

    window.addEventListener('resize', () => {
        document.querySelectorAll(".adapatable").forEach((container) => {
            let classSplitted = container.className.split(" ");
            classSplitted.pop();
            classSplitted = classSplitted.join(" ");

            if(window.screen.width <= 1024 )
                container.className = classSplitted.concat(" section");
            else
                container.className = classSplitted.concat(" container");
        });
    });


});


