export function createHtml(post) {
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