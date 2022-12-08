import SignUpForm from "../forms/signUpForm"
import SignInForm from "../forms/signInForm"
import { UserData } from "../App"

function SignArea({signIn}: {signIn: boolean}, setUser: React.SetStateAction<UserData | null>){
    if (signIn) {
        return (
            <SignInForm setUser={setUser} />
        )
    }
    return (
        <SignUpForm />
    )
}

export default SignArea;