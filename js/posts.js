const loading = document.querySelector(".loading");
const postsContainer = document.querySelector(".all-posts");
const postsContainerCategories = document.querySelector(".all-posts-category");
const loadMorePostsButton = document.querySelector(".load-more");

const url = "https://skinup.maby.one/wp-json/wp/v2/posts?per_page=50";

// HTML ELEMENTS CATEGORIES
const categoryProducts = document.querySelector(".category-products");
const categoryHowTo = document.querySelector(".category-howto");
const categoryMaleSkincare = document.querySelector(".category-maleskincare");
const categoryMatureSkin = document.querySelector(".category-matureskin");
const categoryAtHomeSpa = document.querySelector(".category-athomespa");
const categoryAllPosts = document.querySelector(".category-allposts");

// API CALL
async function fetchAllPosts() {
    try {
        const response = await fetch(url);
        const posts = await response.json();

        for (let i = 0; i < posts.length; i++) {
            const postImage = posts[i].content.rendered;
            const postsCategoryId = posts[i].categories[0];

                    // EVENT LISTENERS FOR CATEGORY BUTTONS
                    categoryProducts.addEventListener("click", function filterCategoryProducts() {
                        if(postsCategoryId === 6) {
                            postsContainer.innerHTML = "";
                            postsContainer.innerHTML += `<div class="post">
                            <a href="specific-post.html?id=${posts[i].id}">
                            <div class="hide-p">${postImage}</div>
                            <div class="post-text">
                                <h2>${posts[i].title.rendered}</h2>
                                <p>${posts[i].excerpt.rendered}</p>
                            </div>
                            </a>
                        </div>`;
                        }
                    });   
                    
                    categoryHowTo.addEventListener("click", function filterCategoryHowTo() {
                        if(postsCategoryId === 7) {
                            postsContainer.innerHTML = "";
                            postsContainer.innerHTML += `<div class="post">
                            <a href="specific-post.html?id=${posts[i].id}">
                            <div class="hide-p">${postImage}</div>
                            <div class="post-text">
                                <h2>${posts[i].title.rendered}</h2>
                                <p>${posts[i].excerpt.rendered}</p>
                            </div>
                            </a>`
                        }
                    });

                    categoryMaleSkincare.addEventListener("click", function filterCategoryMaleSkincare() {
                        if(postsCategoryId === 4) {
                            postsContainer.innerHTML = "";
                            postsContainer.innerHTML += `<div class="post">
                            <a href="specific-post.html?id=${posts[i].id}">
                            <div class="hide-p">${postImage}</div>
                            <div class="post-text">
                                <h2>${posts[i].title.rendered}</h2>
                                <p>${posts[i].excerpt.rendered}</p>
                            </div>
                            </a>
                        </div>`;
                        }
                    });

                    categoryAtHomeSpa.addEventListener("click", function filterCategoryAtHomeSpa() {
                        if(postsCategoryId === 3) {
                            postsContainer.innerHTML = "";
                            postsContainer.innerHTML += `<div class="post">
                            <a href="specific-post.html?id=${posts[i].id}">
                            <div class="hide-p">${postImage}</div>
                            <div class="post-text">
                                <h2>${posts[i].title.rendered}</h2>
                                <p>${posts[i].excerpt.rendered}</p>
                            </div>
                            </a>
                        </div>`;
                        }
                    });

                    categoryMatureSkin.addEventListener("click", function filterCategoryMatureSkin() {
                        if(postsCategoryId === 5) {
                            postsContainer.innerHTML = "";
                            postsContainer.innerHTML += `<div class="post">
                            <a href="specific-post.html?id=${posts[i].id}">
                            <div class="hide-p">${postImage}</div>
                            <div class="post-text">
                                <h2>${posts[i].title.rendered}</h2>
                                <p>${posts[i].excerpt.rendered}</p>
                            </div>
                            </a>
                        </div>`;
                        }
                    });

                    // POSTS THAT DISPLAYS IF THERE IS NO CATEGORY ID PARAMETER
                    if(!postCategoryIds) {
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
                            console.log(postCategoryIds);
                            loading.innerHTML = "";
                            postsContainer.innerHTML = "";
                            postsContainerCategories.innerHTML += `<div class="post">
                                                            <a href="specific-post.html?id=${posts[i].id}">
                                                            <div class="hide-p">${postImage}</div>
                                                            <div class="post-text">
                                                                <h2>${posts[i].title.rendered}</h2>
                                                                <p>${posts[i].excerpt.rendered}</p>
                                                            </div>
                                                            </a>
                                                        </div>` 
                            
                            } else if (postsCategoryId === 6 && postCategoryIds === "6") {
                            loading.innerHTML = "";
                            postsContainer.innerHTML = "";
                            postsContainerCategories.innerHTML += `<div class="post">
                                                            <a href="specific-post.html?id=${posts[i].id}">
                                                            <div class="hide-p">${postImage}</div>
                                                            <div class="post-text">
                                                                <h2>${posts[i].title.rendered}</h2>
                                                                <p>${posts[i].excerpt.rendered}</p>
                                                            </div>
                                                            </a>
                                                        </div>` 
                            } else if (postsCategoryId === 4 && postCategoryIds === "4") {
                            loading.innerHTML = "";
                            postsContainer.innerHTML = "";
                            postsContainerCategories.innerHTML += `<div class="post">
                                                            <a href="specific-post.html?id=${posts[i].id}">
                                                            <div class="hide-p">${postImage}</div>
                                                            <div class="post-text">
                                                                <h2>${posts[i].title.rendered}</h2>
                                                                <p>${posts[i].excerpt.rendered}</p>
                                                            </div>                                                                </a>
                                                        </div>`
                            } else if (postsCategoryId === 3 && postCategoryIds === "3") {
                            loading.innerHTML = "";
                            postsContainer.innerHTML = "";
                            postsContainerCategories.innerHTML += `<div class="post">
                                                        <a href="specific-post.html?id=${posts[i].id}">
                                                        <div class="hide-p">${postImage}</div>
                                                        <div class="post-text">
                                                            <h2>${posts[i].title.rendered}</h2>
                                                            <p>${posts[i].excerpt.rendered}</p>                                                            </div>
                                                         </a>
                                                      </div>`
                            } else if (postsCategoryId === 5 && postCategoryIds === "5") {
                                loading.innerHTML = "";
                                postsContainerCategories.innerHTML += `<div class="post">
                                                            <a href="specific-post.html?id=${posts[i].id}">
                                                            <div class="hide-p">${postImage}</div>
                                                            <div class="post-text">
                                                                <h2>${posts[i].title.rendered}</h2>
                                                                <p>${posts[i].excerpt.rendered}</p>                                                            </div>
                                                             </a>
                                                          </div>`
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