import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"
import { getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../../firebase.config";
import { toast } from 'react-toastify';
const RightSideBar = () => {
    const auth = getAuth(app);
    const { user } = useContext(AuthContext)
    const loginInWithGoogle = () => {
        const provider = new GoogleAuthProvider
        signInWithPopup(auth, provider).catch((error) => {
            toast(error.message)
        });
    }
    const loginWithGitub = async () => {
        const provider = new GithubAuthProvider();
        signInWithPopup(auth, provider).then(res => console.log(res))
            .catch((error) => {
                toast(error.message)
            });
    }
    return (
        <aside>
            {!user &&
                <> <p className="text-[20px] mb-[20px] text-[#403F3F]">Login With</p>
                    <button onClick={loginInWithGoogle} className="flex gap-2 w-[100%] py-[8px] items-center justify-center rounded border-solid border-[1px] mb-3 border-[#77A0BB]">
                        <img width={'20px'} src="https://www.svgrepo.com/show/452216/google.svg" alt="google" />
                        <span>Login with Google</span> </button>
                    <button onClick={loginWithGitub} className="flex gap-2 w-[100%] py-[8px] items-center justify-center rounded border-solid border-[1px] border-[#212121]">
                        <img width={'20px'} src="https://www.svgrepo.com/show/475654/github-color.svg" alt="github" />
                        <span>Login With GitHub</span>
                    </button>
                </>}
        </aside>
    )
}

export default RightSideBar