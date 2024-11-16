import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        <div>
            <p>Auth layout</p>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;