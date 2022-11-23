const loading = document.querySelector(".loading");
const postsContainer = document.querySelector(".all-posts");
const loadMorePostsButton = document.querySelector(".load-more");

const url = "https://skinup.maby.one/wp-json/wp/v2/posts?per_page=50";

// ADDING CATEGORY ID PARAMS FOR CATEGORY BUTTONS BY FETCHING CATEGORY IDs
const categoryUrl = "https://skinup.maby.one/wp-json/wp/v2/categories/";
const categoryPosts = document.querySelector(".category-posts");

async function fetchCategoryId() {
    try {
        const response = await fetch(categoryUrl);
        const category = await response.json();
        
        const categoryAtHomeSpa = category[0].id;
        const categoryHowTo = category[1].id;
        const categoryMaleSkincare = category[2].id;
        const categoryMatureSkin = category[3].id;
        const categoryProducts = category[4].id;
        const categoryUncategorized = category[5].id;

        categoryPosts.innerHTML = `<div class="category-allposts"><a href="posts.html">All posts</a></div>
                                    <div class="category-products"><a href="posts.html?categoryId=${categoryProducts}">Products</a></div>
                                    <div class="category-howto"><a href="posts.html?categoryId=${categoryHowTo}">How to</a></div>
                                    <div class="category-maleskincare"><a href="posts.html?categoryId=${categoryMaleSkincare}">Male skincare</a></div>
                                    <div class="category-matureskin"><a href="posts.html?categoryId=${categoryMatureSkin}">Mature skin</a></div>
                                    <div class="category-athomespa"><a href="posts.html?categoryId=${categoryAtHomeSpa}">At home spa</a></div>`

    } catch (error) {
        console.log(error);
    }
}

fetchCategoryId();


// API CALL
async function fetchAllPosts() {
    try {
        const response = await fetch(url);
        const posts = await response.json();

        for (let i = 0; i < posts.length; i++) {
            const postImage = posts[i].content.rendered;
            const postsCategoryId = posts[i].categories[0];
            
            // CREATE HTML FUNCTION
            function createHtmlForPost(posts) {
                loading.innerHTML = "";
                postsContainer.innerHTML += `<div class="post">
                                            <a href="specific-post.html?id=${posts[i].id}">
                                            <div class="hide-p">${postImage}</div>
                                            <div class="post-text">
                                                <h2>${posts[i].title.rendered}</h2>
                                                <p>${posts[i].excerpt.rendered}</p>                                                            </div>
                                             </a>
                                          </div>`
            }

            // POSTS THAT DISPLAYS IF THERE IS NO CATEGORY ID PARAMETER
            if(!postCategoryIds) {
                if (i <= 8) {
                    createHtmlForPost(posts);

                    } else { 
                        loadMorePostsButton.addEventListener("click", function loadAllPosts() {
                                postsContainer.innerHTML += `<div class="post">
                                                                <a href="specific-post.html?id=${posts[i].id}">
                                                                    <div class="hide-p">${postImage}</div>
                                                                    <div class="post-text">
                                                                        <h2>${posts[i].title.rendered}</h2>
                                                                        <p>${posts[i].excerpt.rendered}</p>
                                                                    </div>
                                                                </a>
                                                            </div>`
                        });
                    }
                    // POSTS THAT DISPLAY IF CATEGORY ID PARAMETER EXISTS 
                } else if (postsCategoryId === 7 && postCategoryIds === "7") {
                    createHtmlForPost(posts);
                    loadMorePostsButton.innerHTML = `<a href="posts.html"><button class="cta-button load-more">Load more</button></a>`
                        
                } else if (postsCategoryId === 6 && postCategoryIds === "6") {
                    createHtmlForPost(posts);
                    loadMorePostsButton.innerHTML = `<a href="posts.html"><button class="cta-button load-more">Load more</button></a>`

                } else if (postsCategoryId === 4 && postCategoryIds === "4") {
                    createHtmlForPost(posts);
                    loadMorePostsButton.innerHTML = `<a href="posts.html"><button class="cta-button load-more">Load more</button></a>`

                } else if (postsCategoryId === 3 && postCategoryIds === "3") {
                    createHtmlForPost(posts);
                    loadMorePostsButton.innerHTML = `<a href="posts.html"><button class="cta-button load-more">Load more</button></a>`

                } else if (postsCategoryId === 5 && postCategoryIds === "5") {
                    createHtmlForPost(posts);
                    loadMorePostsButton.innerHTML = `<a href="posts.html"><button class="cta-button load-more">Load more</button></a>`                    
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

// Getting post category id

const params = new URLSearchParams(window.location.search);
const postCategoryIds = params.get("categoryId");

fetchAllPosts();