function togglehidden(page) {
    let mainPage = document.getElementById("maincon")
    mainPage.classList.toggle("hidden")
    console.log(page)
    let articlePage = document.getElementById(page)
    articlePage.classList.toggle("articlepagesflex")

}

