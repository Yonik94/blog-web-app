import { ApolloClient, InMemoryCache  } from '@apollo/client';
export const client = new ApolloClient({
    uri: 'http://localhost:3060/graphql',
    credentials: 'include',
    cache: new InMemoryCache(),
});