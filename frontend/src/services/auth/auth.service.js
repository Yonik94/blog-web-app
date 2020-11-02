import { client } from '../index';
import { authMutations } from './auth.mutation';

export const authService = {
    loginSignup,
}

async function loginSignup(creds) {
    const res = await client.mutate({
        mutation: creds.fullName ? authMutations.signup({...creds}) : authMutations.login({...creds})
    });
    // document.cookie = `token = ${ creds.fullName? res.data.signup.token : res.data.login.token};`;
    return creds.fullName? res.data.signup : res.data.login;
}