import { gql } from '@apollo/client';

export const blogMutations = {
    addBlog
}

function addBlog({ name }) {
    return gql`
        mutation {
            addBlog(name: "${name}",) {
                id
                name
            }
        }
    `
}