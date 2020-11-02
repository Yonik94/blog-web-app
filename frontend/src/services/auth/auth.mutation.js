import { gql } from '@apollo/client';

export const authMutations = {
    signup,
    login
}

function signup({ fullName, username, password }) {
    return gql`
        mutation {
            signup(fullName: "${fullName}", username: "${username}", password:"${password}") {
                token
                user {
                    id,
                    fullName,
                    username
                }
            }
        }
    `
}

function login({ username, password }) {
    return gql`
        mutation {
            login(username: "${username}", password: "${password}") {
                token
                user {
                    id
                    username
                    fullName
                    blogs {
                        name
                        id
                    }
                }
            }
        }
    `
}