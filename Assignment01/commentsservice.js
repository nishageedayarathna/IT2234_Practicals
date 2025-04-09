const comments = require('./comments');
const users = require('../users/users');

function countUserComments(userId) {
    return comments.filter((comment) => comment.userId == userId).length;
}

function getCommentsWithUser(postId) {
    
    const filteredComments = comments.filter(comment => comment.postId === postId);

    
    if (filteredComments.length === 0) {
        return null;
    }

   
    return filteredComments.map(comment => {
        
        const user = users.find(u => u.id === comment.userId);

        
        return {
            commentator: user ? user.fullName : 'Unknown User',  
            comment: comment.content  
        };
    });
}

module.exports = { countUserComments,getCommentsWithUser };
