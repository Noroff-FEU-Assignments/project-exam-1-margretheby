// Getting posts by category
const params = new URLSearchParams(window.location.search);
const postCategoryIds = params.get("categoryId");
const postCategoryUrl = "https://skinup.maby.one/wp-json/wp/v2/categories/" + postCategoryIds;

async function fetchPostsByCategory(postCategoryId) {
    try {
        const response = await fetch(postCategoryUrl);
        const categories = await response.json();
    } catch(error) {
        console.log(error);
    }
}


else { 
    // Putt kode her som henter posts med categoryId params, se på specific post page for inspo
    
    for (let i = 0; i < posts.length; i++) {
        loading.innerHTML = "";
        const postCategoryId = posts[i].categories;
        fetchPostsByCategory(postCategoryId);
        if (postCategoryId === 3) {
            postsContainer.innerHTML = "<p><span>Category: </span>" + posts[0].name + "</p>";
        } else if (postCategoryId === 7) {
            postsContainer.innerHTML = "<p><span>Category: </span>" + posts[1].name + "</p>"; 
        } else if (postCategoryId === 4) {
            postsContainer.innerHTML = "<p><span>Category: </span>" + posts[2].name + "</p>"; 
        }  else if (postCategoryId === 5) {
            postsContainer.innerHTML = "<p><span>Category: </span>" + posts[3].name + "</p>"; 
        } else if (postCategoryId === 6) { 
            postsContainer.innerHTML = "<p><span>Category: </span>" + posts[4].name + "</p>"; 
        } else {
            postsContainer.innerHTML = "<p><span>Category: </span>" + posts[5].name + "</p>"; 
        }

        console.log(postCategoryId);
    }
}


function mapProductsCategory() {
    const postsCategoryId = posts[i].categories;

    const mapProducts = postsCategoryId.map(x => x === 6);
    const mapHowTo = postsCategoryId.map(x => x === 7);
    const mapMaleSkincare = postsCategoryId.map(x => x === 4);
    const mapMatureSkin = postsCategoryId.map(x => x === 5);
    const mapAtHomeSpa = postsCategoryId.map(x => x === 3);

    if (mapProducts) {
    postsContainer.innerHTML = "";
    postsContainer.innerHTML += `<div>${mapProducts}</div>`;
    }
};

categoryProducts.addEventListener("click", mapProductsCategory);





// ADD EVENT LISTENERS


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




// HTML ELEMENTS CATEGORY BUTTONS
const categoryButtonProducts = document.querySelector(".category-products");
const categoryButtonHowTo = document.querySelector(".category-howto");
const categoryButtonMaleSkincare = document.querySelector(".category-maleskincare");
const categoryButtonMatureSkin = document.querySelector(".category-matureskin");
const categoryButtonAtHomeSpa = document.querySelector(".category-athomespa");