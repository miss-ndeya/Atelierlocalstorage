let button = document.querySelector('button');
let body = document.querySelector('body');

var theme = localStorage.getItem('theme');
console.log(theme);

if (theme) {
    body.classList.add(theme);
}
button.addEventListener("click", function(){

    if (body.classList.contains("dark")) {
        // console.log('dark');
        body.classList.add("light");
        body.classList.remove("dark");
        localStorage.setItem('theme', 'light');

    } else {
        // console.log("light");
        body.classList.add("dark");
        body.classList.remove("light");
        localStorage.setItem('theme', 'dark');
    }
}) 



