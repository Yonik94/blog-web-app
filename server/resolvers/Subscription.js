const newBlogSubscribe = (parent, args, context, info) => {
    return context.pubsub.asyncIterator("NEW_BLOG");
}

const newBlog = {
    subscribe: newBlogSubscribe,
    resolve: payload => payload 
}

module.exports = {
    newBlog
}