//* Navbar toggle
function toggleMenu() {
    const menuToggle = document.querySelector('.icon');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

//!-----------------Extras--------------------------

const effect = document.querySelector('.effect-2');
for (var i = 0; i < 28; i++) {
    effect.innerHTML += '<div class ="circle"></div>';
}


function bodyScrollingToggle() {
    document.body.classList.toggle("stop-scrolling");
}
//!-----------------About Tabs--------------------------

(() => {
    const aboutSection = document.querySelector(".about-section"),
        tabsContainer = document.querySelector(".about-tabs");
    tabsContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("tab-item") &&
            !event.target.classList.contains("active")) {

            const target = event.target.getAttribute("data-target");

            // deactivate active tab-item
            tabsContainer.querySelector(".active").classList.remove("active");
            // activate the selected tab-item
            event.target.classList.add("active");

            // deactivating the tab-content
            aboutSection.querySelector(".tab-content.active").classList.remove("active");
            // display the selected tab-content
            aboutSection.querySelector(target).classList.add("active");

        }
    })
})();

//!-------------- Project Filter and Popups  ---------------

(() => {

    const filterContainer = document.querySelector(".projects-filter"),
        projectItemsContainer = document.querySelector(".project-items"),
        projectItems = document.querySelectorAll(".project-item"),
        popup = document.querySelector(".project-popup"),
        closeBtn = popup.querySelector(".pp-close"),
        projectDetailsContainer = document.querySelector(".pp-details"),
        projectDetailsBtn = document.querySelector(".pp-project-details-btn");

    let itemIndex, slideIndex, screenshots;

    /* ------------------
    filter portfolio items 
    -------------------- */

    filterContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("filter-item") &&
            !event.target.classList.contains("active")) {

            // Deactivate  active filter-item
            filterContainer.querySelector(".active").classList.remove("active");
            // activate selected filter item
            event.target.classList.add("active");
            const target = event.target.getAttribute("data-target");

            projectItems.forEach((item) => {
                if (target === item.getAttribute("data-category") || target === 'all') {
                    item.classList.remove("hide");
                    item.classList.add("show");
                } else {
                    item.classList.remove("show");
                    item.classList.add("hide");
                }
            })
        }
    })


    projectItemsContainer.addEventListener("click", (event) => {
        if (event.target.closest(".project-item-inner")) {
            const projectItem = event.target.closest(".project-item-inner").parentElement;
            // get the project item index
            itemIndex = Array.from(projectItem.parentElement.children).indexOf(projectItem);
            screenshots = projectItems[itemIndex].querySelector(".project-item-img img").getAttribute("data-screenshots");

            screenshots = screenshots.split(",");
            slideIndex = 0;
            popupToggle();
            popupSlideshow();
            popupDetails();
        }
    })

    closeBtn.addEventListener(("click"), () => {
        popupToggle();
        if (projectDetailsContainer.classList.contains("active")) {
            popupDetailsToggle();
        }

    })


    function popupToggle() {
        popup.classList.toggle("open");
        bodyScrollingToggle();
    }

    function popupSlideshow() {
        const imgSrc = screenshots[slideIndex];
        const popupImg = popup.querySelector(".pp-img");
        popupImg.src = imgSrc;


    }

    function popupDetails() {
        if (!projectItems[itemIndex].querySelector(".project-item-details")) {
            projectDetailsBtn.style.display = "none";
            return;
        }
        projectDetailsBtn.style.display = "block";
        const details = projectItems[itemIndex].querySelector(".project-item-details").innerHTML;
        popup.querySelector(".pp-project-details").innerHTML = details;
        const title = projectItems[itemIndex].querySelector(".project-item-title").innerHTML;
        popup.querySelector(".pp-title h2").innerHTML = title;
        const category = projectItems[itemIndex].getAttribute("data-category");
        popup.querySelector(".pp-project-category").innerHTML = category;
    }

    projectDetailsBtn.addEventListener("click", () => {
        popupDetailsToggle();
    })

    function popupDetailsToggle() {
        if (projectDetailsContainer.classList.contains("active")) {
            projectDetailsBtn.querySelector("i").classList.remove("fa-minus");
            projectDetailsBtn.querySelector("i").classList.add("fa-plus");
            projectDetailsContainer.classList.remove("active");
            projectDetailsContainer.style.maxHeight = 0;


        } else {
            projectDetailsBtn.querySelector("i").classList.remove("fa-plus");
            projectDetailsBtn.querySelector("i").classList.add("fa-minus");

            projectDetailsContainer.classList.add("active");
            projectDetailsContainer.style.maxHeight = projectDetailsContainer.scrollHeight + "px";
            popup.scrollTo(0, projectDetailsContainer.offsetTop);


        }
    }

})();



// !---------------------------Back to Top------------------------

// Set a variable for our button element.
const scrollToTopButton = document.getElementById('js-top');

// Let's set up a function that shows our scroll-to-top button if we scroll beyond the height of the initial window.
const scrollFunc = () => {
    // Get the current scroll value

    let y = window.scrollY;

    // If the scroll value is greater than the window height, let's add a class to the scroll-to-top button to show it!
    if (y > 300) {
        scrollToTopButton.className = "top-link show";
    } else {
        scrollToTopButton.className = "top-link hide";
    }


};

window.addEventListener("scroll", scrollFunc);


//!--------------------------------------------------------

const removeHash = () => {
    let y = window.scrollY;

    var hash = location.hash.replace('#', '');

    if (y === 0) {
        if (hash != '') {


            // Clear the hash in the URL
            location.hash = '';
        }

    }
}
window.addEventListener("scroll", removeHash);

//!--------------------------------------------------------

// * Side theme box toggle
var boxToggleIcon = document.getElementById('box-toggle-icon');
var box = boxToggleIcon.parentElement.querySelector('.toggle-box');

boxToggleIcon.addEventListener("click", () => {
    box.classList.toggle('open');

});

function scrollClose() {
    let y = window.scrollY;
    const menuToggle = document.querySelector('.icon');
    const navigation = document.querySelector('.navigation');

    if ((y > 0 && box.classList.contains("open")) || (y > 0 && menuToggle.classList.contains("active"))) {
        menuToggle.classList.remove('active');
        navigation.classList.remove('active');
        box.classList.remove('open');

    }

};
window.addEventListener("scroll", scrollClose);

//!--------------------------------------------------------

//* Theme toggle
var checkbox = document.querySelector('input[name=theme]');
checkbox.addEventListener('change', function () {
    if (this.checked) {
        trans()
        darkTheme()
        localStorage.setItem("theme", "dark")

    } else {
        trans()
        lightTheme()
        localStorage.setItem("theme", "light")

    }

})
let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}

function darkTheme() {
    box.querySelector(".toggle-state").checked = "true"
    document.documentElement.setAttribute('data-theme', 'dark')
    boxToggleIcon.classList.remove("fa-moon")
    boxToggleIcon.classList.add("fa-sun")
}
function lightTheme() {
    document.documentElement.setAttribute('data-theme', 'light')
    boxToggleIcon.classList.remove("fa-sun")
    boxToggleIcon.classList.add("fa-moon")
}

// ? reload same theme on revisit/refresh

const themeMode = () => {
    if (localStorage.getItem("theme") !== null) {
        if (localStorage.getItem("theme") === "dark") {
            darkTheme()
        } else {
            lightTheme()
        }
    }
}
themeMode();

//!--------------------------------------------------------

//* FORM Behavior

var form = document.getElementById("my-form");
function error() { alert("Oops! Something went wrong"); };
function success() { alert("Message Delivered"); };

async function handleSubmit(event) {
    event.preventDefault();
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        // console.log(response);
        form.reset();
        setTimeout(success, 3000);
    }).catch(error => {
        console.log(error);
        setTimeout(error, 3000);
    });
}
form.addEventListener("submit", handleSubmit);

//!--------------------------------------------------------