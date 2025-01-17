import useAuth from "../hooks/useAuth";

const HomeLayout = () => {
    const { user } = useAuth();
    console.log(user)
    return (
        <div>
            <h1>Hello</h1>
        </div>
    );
};

export default HomeLayout;