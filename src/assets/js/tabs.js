(function(){
    const tabs = document.querySelectorAll(".js-tab");
  
    Array.from(tabs, tab => {
      const tabsLinks = tab.querySelectorAll(".js-tab-link");
      let currentActiveTab = tab.querySelector(".js-tab-link.is-active");
  
        const toggleTab = (toggledTabLink = currentActiveTab) => {
            currentActiveTab = toggledTabLink || currentActiveTab;
            toggledTabLink.classList.toggle("is-active");
            const toggledTabData = toggledTabLink.dataset.index;
            const toggledTabArea = tab.querySelector(`.js-taberea[data-indexed=${toggledTabData}]`);
            toggledTabArea.classList.toggle("is-active")
        }
      
        
        tabsLinks.forEach(tabsLink => {
            tabsLink.addEventListener("click", function(event){
                if(currentActiveTab === this){
                    return;
                }
                if(currentActiveTab){
                     toggleTab();
                }

                toggleTab(this);
            })
        })
    })
})();