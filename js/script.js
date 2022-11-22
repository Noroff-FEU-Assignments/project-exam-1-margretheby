const categoryLinks = document.querySelector(".category-links");

const categoryUrl = "https://skinup.maby.one/wp-json/wp/v2/categories/";

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

        categoryLinks.innerHTML = `<h2>Categories</h2>
                                    <a href="posts.html?categoryId=${categoryProducts}">Products</a>
                                    <a href="posts.html?categoryId=${categoryHowTo}">How to</a>
                                    <a href="posts.html?categoryId=${categoryMaleSkincare}">Male skincare</a>
                                    <a href="posts.html?categoryId=${categoryMatureSkin}">Mature skin</a>
                                    <a href="posts.html?categoryId=${categoryAtHomeSpa}">At home spa</a>`;



    } catch (error) {
        console.log(error);
    }
}

fetchCategoryId();



