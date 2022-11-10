// GET ID PARAMS
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const url = "https://skinup.maby.one/wp-json/wp/v2/posts/" + id;

// GET HTML ELEMENTS
const loading = document.querySelector(".loading");
const postContainer = document.querySelector(".post-container");
const headingMobile = document.querySelector(".header-text");
const category = document.querySelector(".category");

// FETCH SPECIFIC POST FROM API

async function fetchPost() {
    try {
        const response = await fetch(url);
        const post = await response.json();

        createHtml(post);
        fetchCategories(post);
    } catch(error) {
        console.log(error);
    }
}

fetchPost();

function createHtml(post) {
    loading.innerHTML = "";
    headingMobile.innerHTML =`<h1>${post.title.rendered}</h1>`
    postContainer.innerHTML = `<h1 class="hidden-mobile">${post.title.rendered}</h1>
                                <div class="post-content">${post.content.rendered}</div>`

}


// FETCH CATEGORIES FROM API
const categoriesUrl = "https://skinup.maby.one/wp-json/wp/v2/categories/";

async function fetchCategories(post) {
    try {
        const response = await fetch(categoriesUrl);
        const categories = await response.json();

        for(let i = 0; i < categories.length; i++) {
            let categoryName = categories[i].name;
            console.log(categoryName);
            switch(i) {
                case 0:
                    category.innerHTML = "Category: " + categories[0].name;
                    break;
                case 1: 
                    category.innerHTML = "Category: " + categories[1].name; 
                    break;
                case 2: 
                    category.innerHTML = "Category: " + categories[2].name; 
                    break;
                case 3: 
                    category.innerHTML = "Category: " + categories[3].name; 
                    break;
                case 4: 
                    category.innerHTML = "Category: " + categories[4].name; 
                    break;
                default:
                    category.innerHTML = "Category: " + categories[5].name; 
                    break;

            }

        }


    } catch (error) {
        console.log(error);
    }
}