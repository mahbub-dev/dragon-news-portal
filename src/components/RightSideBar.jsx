
const RightSideBar = () => {
    return (
        <aside>
            <p className="text-[20px] mb-[20px] text-[#403F3F]">Login With</p>
            <button className="flex gap-2 w-[100%] py-[8px] items-center justify-center rounded border-solid border-[1px] mb-3 border-[#77A0BB]">
                <img width={'20px'} src="https://www.svgrepo.com/show/452216/google.svg" alt="google" />
                <span>Login with Google</span> </button>
            <button className="flex gap-2 w-[100%] py-[8px] items-center justify-center rounded border-solid border-[1px] border-[#212121]">
                <img width={'20px'} src="https://www.svgrepo.com/show/475654/github-color.svg" alt="github" />
                <span>Login With GitHub</span>
            </button>
        </aside>
    )
}

export default RightSideBar