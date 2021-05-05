//* Navbar toggle
function toggleMenu() {
    const menuToggle = document.querySelector('.icon');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

//!--------------------------------------------------------
const effect = document.querySelector('.effect-2');
for (var i = 0; i < 28; i++) {
    effect.innerHTML += '<div class ="circle"></div>';
}



//!--------------------------------------------------------

//* Theme toggle
// var checkbox = document.querySelector('input[name=theme]');
// checkbox.addEventListener('change', function () {
//     if (this.checked) {
//         trans()
//         document.documentElement.setAttribute('data-theme', 'dark')
//     } else {
//         trans()
//         document.documentElement.setAttribute('data-theme', 'light')
//     }

// })
// let trans = () => {
//     document.documentElement.classList.add('transition');
//     window.setTimeout(() => {
//         document.documentElement.classList.remove('transition')
//     }, 1000)
// }

//!--------------------------------------------------------

//* FORM Behavior

// var form = document.getElementById("my-form");
// function error() { alert("Oops! Something went wrong"); };
// function success() { alert("Message Delivered"); };

// async function handleSubmit(event) {
//     event.preventDefault();
//     var data = new FormData(event.target);
//     fetch(event.target.action, {
//         method: form.method,
//         body: data,
//         headers: {
//             'Accept': 'application/json'
//         }
//     }).then(response => {
//         // console.log(response);
//         form.reset();
//         setTimeout(success, 3000);
//     }).catch(error => {
//         console.log(error);
//         setTimeout(error, 3000);
//     });
// }
// form.addEventListener("submit", handleSubmit);

//!--------------------------------------------------------