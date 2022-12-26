(function () {
    const CloseBanners = document.querySelectorAll(".c-banner__close");
    CloseBanners.forEach(CloseBanners => {
        CloseBanners.addEventListener("click", event => {
            const banner = event.target.parentNode;
            banner.classList.add("collapse");
            banner.addEventListener("transitionend", function(event){
                if(event.target === this){
                    this.remove();
                }
            });
        });
    });
})();