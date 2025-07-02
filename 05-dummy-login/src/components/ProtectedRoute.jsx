import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
    const isLogin = useSelector((state) => state.auth.isLogin);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLogin) navigate("/login");
    }, []);

    return <>{children}</>;
}
