document.addEventListener('DOMContentLoaded', function () {
    var parallax = M.Parallax.init(
        document.querySelectorAll('.parallax')
    );

    var collapsible = M.Collapsible.init(
        document.querySelectorAll('.collapsible')
    );

    ScrollOut({
        targets: [".container", ".section"],
        once: true,
    });
    
});


