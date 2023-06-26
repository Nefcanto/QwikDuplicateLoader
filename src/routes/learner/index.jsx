import { component$ } from '@builder.io/qwik'
import { Form } from '@builder.io/qwik-city'
import {
    useAuthSession,
    useAuthSignin,
    useAuthSignout,
} from 'Accounts'

// export const onRequest = (event) => {
//     const session = event.sharedMap.get('session');
//     if (!session || new Date(session.expires) < new Date()) {
//         throw event.redirect(302, `/api/auth/signin?providerId=keycloak&callbackUrl=${event.url.href}`);
//     }
// }

const Learner = component$(() => {
    const session = useAuthSession();
    const signIn = useAuthSignin();
    const signOut = useAuthSignout();

    return <div>
        Learner page
        <br />
        <p>{session.value?.user?.email}</p>

        <br />
        {
            session.value?.user
                ?
                <Form action={signOut}>
                    <input type="hidden" name="callbackUrl" value="/" />
                    <button>Sign Out</button>
                </Form>
                :
                <Form action={signIn}>
                    <input type="hidden" name="providerId" value="keycloak" />
                    <input type="hidden" name="options.callbackUrl" value="/learner" />
                    <button>Sign In</button>
                </Form>
        }

    </div>
})

export default Learner
