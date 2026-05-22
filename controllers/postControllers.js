import posts from "../data/posts.js";

function index(request, response) {
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

    if (searchedPost) {
        response.status(200).json({
            message: "Ecco il post che cercavi",
            post: searchedPost
        })
    } else {
        response.status(404).json({
            message: "Id non presente o non valido"
        })
    }

}

export { index, show }