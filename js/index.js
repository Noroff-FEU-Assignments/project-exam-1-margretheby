let homePageContainer = document.querySelector(".posts")
const homePageLoading = document.querySelector(".loading")
const postsUrl = "https://skinup.maby.one/wp-json/wp/v2/posts?per_page=6";
const leftArrow = document.querySelector(".fa-angle-left");
const rightArrow = document.querySelector(".fa-angle-right");
const carouselDots = document.querySelector(".carousel-dots");


// API CALL
async function fetchPosts() {
    try {
        const response = await fetch(postsUrl);
        const posts = await response.json();

        for(let i = 0; i < posts.length; i++) {
            const postImage = posts[i].content.rendered;
            homePageLoading.innerHTML = "";
            if (i <= 2) {
            homePageContainer.innerHTML += `<div class="post">
                                                <a href="specific-post.html?id=${posts[i].id}">
                                                <div class="hide-p">${postImage}</div>
                                                <div class="post-text">
                                                    <h2>${posts[i].title.rendered}</h2>
                                                    <p>${posts[i].excerpt.rendered}</p>
                                                </div>
                                                </a>
                                            </div>`
                                            
            }
        } 
        // POSTS CAROUSEL
        function nextPost () {
            homePageContainer.innerHTML = "";
            for(let i = 3; i < posts.length; i++) {
                const postImage = posts[i].content.rendered;
                if (i <= 5) {
                    homePageContainer.innerHTML += `<div class="post">
                        <a href="specific-post.html?id=${+ posts[i].id}">
                        <div class="hide-p">${postImage}</div>
                            <div class="post-text">
                            <h2>${posts[i].title.rendered}</h2>
                            <p>${posts[i].excerpt.rendered}</p>
                            </div>
                        </a>
                    </div>`
                    carouselDots.style.flexDirection = "row-reverse";
                }
                
            }
            
        } rightArrow.addEventListener("click", nextPost)

        // POSTS CAROUSEL
        function previousPost () {
            homePageContainer.innerHTML = "";
            for(let i = 0; i < posts.length; i++) {
                const postImage = posts[i].content.rendered;
                if (i <= 2) {
                    homePageContainer.innerHTML += `<div class="post">
                        <a href="specific-post.html?=${+ posts[i].id}">
                        <div class="hide-p">${postImage}</div>
                            <div class="post-text">
                            <h2>${posts[i].title.rendered}</h2>
                            <p>${posts[i].excerpt.rendered}</p>
                            </div>
                        </a>
                    </div>`
                    carouselDots.style.flexDirection = "row";
                }
            }
            
        } leftArrow.addEventListener("click", previousPost)
    } catch (error) {
        homePageLoading.innerHTML = "";
        homePageContainer.innerHTML = "Something went wrong";
        console.log(error);
    }
}

const urlParams = new URLSearchParams(window.location.search);
const idParam = urlParams.get("id");

// News letter form validation
const form = document.querySelector("form");
const email = document.querySelector("#email-homepage");
const invalidEmail = document.querySelector(".hidden-p");
const successMessage = document.querySelector(".success-message");

function validateSignUp() {
    event.preventDefault();
    let submitForm = true;

    if(validateEmail(email.value) === true) {
        invalidEmail.style.display = "none";
    } else {
        invalidEmail.style.display = "block";
        submitForm = false;
    }

    if(submitForm) {
        successMessage.style.display = "block";
        form.reset();
    }
}

form.addEventListener("submit", validateSignUp);

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatch = regEx.test(email);
    return patternMatch;
}

// CALLING FUNCTIONS
fetchPosts();