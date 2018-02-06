
export function addComment(postId, author, comment){
    return {
        type: 'Add_COMMENT',
        postId,
        author,
        comment
    }
}

export function removeComment(postId, i){
    return {
        type: 'REMOVE_COMMENT',
        i,
        postId
    }
}