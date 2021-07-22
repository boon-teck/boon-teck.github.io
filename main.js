//
// function toggleMainPage(){
//     let mainPage = document.getElementById("maincon")
//     console.log(mainPage.style)
//     if (mainPage.style.display === "none"){
//         mainPage.style.display = "none";
//         console.log("test")
//     } else {
//         mainPage.style.display = "none"
//         console.log("test")
//     }
// }

function togglehidden(page) {
    let mainPage = document.getElementById("maincon")
    mainPage.classList.toggle("hidden")
    console.log(page)
    let articlePage = document.getElementById(page)
    articlePage.classList.toggle("articlepagesflex")
}

