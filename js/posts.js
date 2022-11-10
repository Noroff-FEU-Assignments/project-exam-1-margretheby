const loading = document.querySelector(".loading");
const postsContainer = document.querySelector(".all-posts");

const url = "https://skinup.maby.one/wp-json/wp/v2/posts/";

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
                                            
            }
        } 

    } catch(error) {
        console.log(error);
        postsContainer.innerHTML = "Something went wrong.";
    }
}

fetchAllPosts();