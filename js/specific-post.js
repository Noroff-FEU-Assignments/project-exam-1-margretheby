// GET ID PARAMS
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const url = "https://skinup.maby.one/wp-json/wp/v2/posts/" + id;

// GET HTML ELEMENTS
const loading = document.querySelector(".loading");
const postContainer = document.querySelector(".post-container");
const headingMobile = document.querySelector(".header-text");
const category = document.querySelector(".category");
const date = document.querySelector(".date");
const dateMobile = document.querySelector(".date-mobile")

// FETCH SPECIFIC POST FROM API

async function fetchPost() {
    try {
        const response = await fetch(url);
        const post = await response.json();

        const categoryId = post.categories[0];

        createHtml(post);
        fetchCategories(categoryId);

        const postImage = document.querySelector(".hide-p");
        const imageModal = document.querySelector(".modal");
        const body = document.querySelector("body");

        postImage.addEventListener("click", function openModal() { 
                        imageModal.style.display = "block";
                        });
        body.addEventListener("click", function closeModal(event) {
             if (event.target.closest(".modal")) {
             imageModal.style.display = "none"; }
            });

    } catch(error) {
        postContainer.innerHTML = `<h1>Something went wrong.</h1>
                                    <p>Please try again later.</p>`;
        console.log(error);
    }
}

fetchPost();

function createHtml(post) {
    document.title = `${post.title.rendered} | SkinUp`
    date.innerHTML = `<p><span>Published: </span>${post.date}</p>`
    dateMobile.innerHTML = `<p><span>Published: </span>${post.date}</p>`
    loading.innerHTML = "";
    headingMobile.innerHTML =`<h1>${post.title.rendered}</h1>`
    postContainer.innerHTML = `<div class="post-title">
                                    <h1 class="hidden-mobile">${post.title.rendered}</h1>
                                </div>
                                <div class="post-content">
                                    <div class="hide-p">${post.content.rendered}</div>
                                    <div class="hide-p modal">${post.content.rendered}</div>
                                    <div class="hide-img">${post.content.rendered}</div>
                                </div>`
}


// FETCH CATEGORIES FROM API
const categoriesUrl = "https://skinup.maby.one/wp-json/wp/v2/categories/";

async function fetchCategories(categoryId) {
    try {
        const response = await fetch(categoriesUrl);
        const categories = await response.json();


        for(let i = 0; i < categories.length; i++) {
            if (categoryId === 3) {
                category.innerHTML = "<p><span>Category: </span>" + categories[0].name + "</p>";
            } else if (categoryId === 7) {
                category.innerHTML = "<p><span>Category: </span>" + categories[1].name + "</p>"; 
            } else if (categoryId === 4) {
                category.innerHTML = "<p><span>Category: </span>" + categories[2].name + "</p>"; 
            }  else if (categoryId === 5) {
                category.innerHTML = "<p><span>Category: </span>" + categories[3].name + "</p>"; 
            } else if (categoryId === 6) { 
                category.innerHTML = "<p><span>Category: </span>" + categories[4].name + "</p>"; 
            } else {
                category.innerHTML = "<p><span>Category: </span>" + categories[5].name + "</p>"; 
            }

        }


    } catch (error) {
        console.log(error);
    }
}