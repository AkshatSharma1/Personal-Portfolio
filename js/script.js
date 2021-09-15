/*-------- Toggle navbar -------*/
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", ()=>{
    hideSection(); /* when i click on the toggler*/
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling");

});

function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}

function toggleNavbar(){
    document.querySelector(".header").classList.toggle("active");
}

/* --------- About Section toggle ------*/
const tabsContainer = document.querySelector(".about-tabs"),
aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e)=>{
    //if active class is present then remove it else add it
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active"))
    {
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");//remove active from the education content if present and vice versa
        aboutSection.querySelector(target).classList.add("active");
    }
});

/*---------- Active Sections Toggle-------*/
document.addEventListener("click",(e)=>{

    /*add overlay to prevent multiple clicks on nav*/
    document.querySelector(".overlay").classList.add("active");

    navToggler.classList.add("hide");
    if(e.target.classList.contains("link-item") && e.target.hash !== "")
    {
        const hash = e.target.hash;
        if(e.target.classList.contains("nav-item"))
        {
            toggleNavbar();
        }
        else{
            hideSection();
            document.body.classList.add("hide-scrolling");

        }

        setTimeout(()=>{
            document.querySelector("section.active").classList.remove("active","fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide-scrolling");
            navToggler.classList.remove("hide");
            document.querySelector(".overlay").classList.remove("active");
        },500);
    }
});


/*--------------------- Portfolio-items details popup -----------------*/
document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("view-project-btn"))
    {
        togglePortfolioPopup();

        document.querySelector(".portfolio-popup").scrollTo(0,0);
        // to get a new thumbnail photo on clicking on a project
        portfolioItemsDetails(e.target.parentElement);
    }
})

function togglePortfolioPopup()
{
    document.querySelector(".portfolio-popup").classList.toggle("open");
    //remove scrolling viewBox
    document.body.classList.toggle("hide-scrolling");
    //hide back when popup is opened
    document.querySelector(".main").classList.toggle("fade-out");
}

document.querySelector(".pp-close").addEventListener("click",togglePortfolioPopup);

/* To hide popup when clicked outside*/
document.addEventListener("click",(e)=>{
    if(e.target.classList.contains(".pp-inner"))
    {
        togglePortfolioPopup();
    }
});

function portfolioItemsDetails(portfolioItems) {
    document.querySelector(".pp-thumbnail img").src = portfolioItems.querySelector(".portfolio-item-thumbnail img").src;

    document.querySelector(".pp-header h3").innerHTML = portfolioItems.querySelector(".portfolio-item-title").innerHTML;

    /*body details*/
    document.querySelector(".pp-body").innerHTML = portfolioItems.querySelector(".portfolio-item-details").innerHTML;
}
