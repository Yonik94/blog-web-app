import { gql } from '@apollo/client';

export const userMutations = {
    addBlog
}

function addBlog({name}) {
    return gql`
        mutation {
            addBlog(name: "${name}",) {
                id
            }
        }
    `
}