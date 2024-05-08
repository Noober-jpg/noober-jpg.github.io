console.log("this is header_bg.js");

let page_header = document.querySelector("#page-header.not-home-page")

console.log(page_header);

addEventListener("scroll",()=>{
    console.log(scrollY);
    if (scrollY != 0) {
        page_header.style.opacity = 0.7
    } else {
        page_header.style.opacity = 1
    }
})