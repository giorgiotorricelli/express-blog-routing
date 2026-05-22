import posts from "../data/posts.js";

function read(request, response) {
    response.status(200).json({
        message: "Ecco la lista dei post",
        posts: posts
    });
}

function show(request, response) {
    const id = request.params.id;
    const realId = Number(id);

    const searchedPost = posts.find(post => {
        return post.id === realId;
    })
    response.status(200).json({
        message: "Ecco il post che cercavi",
        post: searchedPost
    })
}

export {read, show}