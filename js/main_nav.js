(() => {
    let hamburger = document.querySelector('.hamburger'),
        mainNav = document.querySelector('.mainNav'),
        hamNavCon = document.querySelector('.hamburgerNav');

        //function go in the middle
        //debugger;
        function hamburgerMenu() {
            mainNav.classList.toggle('slide-toggle');
            hamNavCon.classList.toggle('slide-toggle');
            hamburger.classList.toggle('expanded');
        }



        //event go here
        hamburger.addEventListener('click', hamburgerMenu);

})();