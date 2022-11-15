const loading = document.querySelector(".loading");
const postsContainer = document.querySelector(".all-posts");
const loadMorePostsButton = document.querySelector(".load-more");

const url = "https://skinup.maby.one/wp-json/wp/v2/posts?per_page=50";

// API CALL
async function fetchAllPosts() {
    try {
        const response = await fetch(url);
        const posts = await response.json();

        for(let i = 0; i < posts.length; i++) {
            const postImage = posts[i].content.rendered;
            loading.innerHTML = "";
            if (i <= 8) {
            postsContainer.innerHTML += `<div class="post">
                                                <a href="specific-post.html?id=${posts[i].id}">
                                                <div class="hide-p">${postImage}</div>
                                                <div class="post-text">
                                                    <h2>${posts[i].title.rendered}</h2>
                                                    <p>${posts[i].excerpt.rendered}</p>
                                                </div>
                                                </a>
                                            </div>`
                                            
            } else { 
                loadMorePostsButton.addEventListener("click", function loadNineNextPosts() {
                        if (i <= 25) {
                        postsContainer.innerHTML += `<div class="post">
                                                        <a href="specific-post.html?id=${posts[i].id}">
                                                        <div class="hide-p">${postImage}</div>
                                                        <div class="post-text">
                                                            <h2>${posts[i].title.rendered}</h2>
                                                            <p>${posts[i].excerpt.rendered}</p>
                                                        </div>
                                                        </a>
                                                    </div>` 
                        } if (i >= 26) {
                            postsContainer.innerHTML += `<div class="post">
                            <a href="specific-post.html?id=${posts[i].id}">
                            <div class="hide-p">${postImage}</div>
                            <div class="post-text">
                                <h2>${posts[i].title.rendered}</h2>
                                <p>${posts[i].excerpt.rendered}</p>
                            </div>
                            </a>
                        </div>` 
                        }
                    
                
                });
            
            } 
        } 

    } catch(error) {
        console.log(error);
        postsContainer.innerHTML = "Something went wrong.";
    }
}

// News letter form validation
const form = document.querySelector("form");
const email = document.querySelector("#email-posts");
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


fetchAllPosts();