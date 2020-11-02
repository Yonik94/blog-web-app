// import {gql} from 'apollo-boost'
import { gql } from '@apollo/client';
export const blogQueries = {
    blogsQuery,
    getBlogById
}

function blogsQuery(selectedData = ['name', 'id', 'admin_id'], name = null) {
    return gql`
        {
            blogs{
                ${selectedData}
                posts {
                    id
                    content
                    title
                }
            }
        }
    `
}

function getBlogById(id, selectedData = ['name', 'id', 'admin_id']) {
    return gql`
        {
            blog(id: ${id}){
                ${selectedData}
                posts {
                    id
                    content
                    title
                }
            }
        }
    `
}