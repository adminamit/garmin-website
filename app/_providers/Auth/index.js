"use client";
import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";
import { deleteCookie } from "cookies-next";
const Context = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [status, setStatus] = useState();
    const [isUpdating, setIsUpdating] = useState(false);

    useEffect(() => {
        const localUser = localStorage.getItem("user");
        const parsedUser = JSON.parse(localUser || "{}");
        if (parsedUser) {
            setUser(JSON.parse(localUser));
            setStatus("loggedIn");
        }
    }, []);

    const login = useCallback(async (user) => {
        setUser(user);
        setStatus("loggedIn");
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("authStatus", "loggedIn");
    }, []);

    const logout = useCallback(async () => {
        setUser(null);
        setStatus("loggedOut");
        localStorage.setItem("user", null);
        localStorage.setItem("authStatus", "loggedOut");
        await fetch(`/api/auth/logout`);
    }, []);

    //     const fetchMe = async () => {
    //         const localUser = localStorage.getItem("user");
    //         const parsedLocalUser = JSON.parse(localUser);
    //         try {
    //             const res = await fetch(
    //                 `${process.env.NEXT_PUBLIC_SERVER_URL}/api/customers/${parsedLocalUser.id}?depth=0`,
    //                 {
    //                     method: "GET",
    //                     credentials: "include",
    //                     headers: {
    //                         "Content-Type": "application/json",
    //                     },
    //                 }
    //             );

    //             if (res.ok) {
    //                 const { user: meUser } = await res.json();
    //                 setUser(meUser || null);
    //                 setStatus(meUser ? "loggedIn" : undefined);
    //             } else {
    //                 throw new Error(
    //                     "An error occurred while fetching your account."
    //                 );
    //             }
    //         } catch (e) {
    //             setUser(null);
    //             throw new Error(
    //                 "An error occurred while fetching your account."
    //             );
    //         }
    //     };

    useEffect(() => {
        const fetchMe = async () => {
            const localUser = localStorage.getItem("user");
            const parsedLocalUser = JSON.parse(localUser);
            setUser(parsedLocalUser || null);
        };

        fetchMe();
    }, []);

    // useEffect(() => {
    //     const fetchMe = async () => {
    //         const localUser = localStorage.getItem("user");
    //         const parsedLocalUser = JSON.parse(localUser);
    //         try {
    //             const res = await fetch(
    //                 `${process.env.NEXT_PUBLIC_SERVER_URL}/api/customers/${parsedLocalUser.id}?depth=1`,
    //                 {
    //                     method: "GET",
    //                     credentials: "include",
    //                     headers: {
    //                         "Content-Type": "application/json",
    //                     },
    //                 }
    //             );
    //             if (res.status == 200) {
    //                 // const { user: meUser } = await res.json();
    //                 const authStatus = await res.json();
    //                 console.log("authStatusauthStatusauthStatusauthStatus");
    //                 console.log(authStatus);
    //                 const { user } = authStatus;
    //                 setUser(user || null);
    //                 setStatus(user ? "loggedIn" : undefined);
    //                 localStorage.setItem("user", JSON.stringify(user));
    //             } else {
    //                 throw new Error(
    //                     "An error occurred while fetching your account."
    //                 );
    //             }
    //         } catch (e) {
    //             setUser(null);
    //             throw new Error(
    //                 "An error occurred while fetching your account."
    //             );
    //         }
    //     };
    //     fetchMe();
    // }, []);

    const updateUser = useCallback(async (data) => {
        const localUser = localStorage.getItem("user");
        const parsedLocalUser = JSON.parse(localUser);
        try {
            const res = await fetch(`/api/customers/${parsedLocalUser.id}`, {
                method: "PATCH",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            if (res.ok) {
                const { doc, errors } = await res.json();
                if (errors) throw new Error(errors[0].message);
                setUser(doc);
                localStorage.setItem("user", JSON.stringify(doc));
                return res;
            } else {
                throw new Error("Error updating! Please try again later.");
            }
        } catch (e) {
            throw new Error("An error occurred while attempting to update.");
        }
    }, []);

    const addItemToWishlist = useCallback(async (productId) => {
        const localUser = localStorage.getItem("user");
        const parsedLocalUser = JSON.parse(localUser);
        try {
            setIsUpdating(true);
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/api/customers/${parsedLocalUser.id}/wishlist/add/${productId}`,
                {
                    method: "PATCH",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({}),
                }
            );
            if (res.ok) {
                const user = await res.json();
                if (user.errors) throw new Error(user.errors[0].message);
                setUser(user);
                localStorage.setItem("user", JSON.stringify(user));
            } else {
                throw new Error("Error updating! Please try again later.");
            }
            setIsUpdating(false);
            return res;
        } catch (e) {
            setIsUpdating(false);
            throw new Error("An error occurred while attempting to update.");
        }
    }, []);

    const removeItemFromWishlist = useCallback(async (productId) => {
        const localUser = localStorage.getItem("user");
        const parsedLocalUser = JSON.parse(localUser);
        try {
            setIsUpdating(true);
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/api/customers/${parsedLocalUser.id}/wishlist/remove/${productId}`,
                {
                    method: "PATCH",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({}),
                }
            );
            if (res.ok) {
                const user = await res.json();
                if (user.errors) throw new Error(user.errors[0].message);
                setUser(user);
                localStorage.setItem("user", JSON.stringify(user));
            } else {
                throw new Error("Error updating! Please try again later.");
            }
            setIsUpdating(false);
            return res;
        } catch (e) {
            setIsUpdating(false);
            throw new Error("An error occurred while attempting to update.");
        }
    }, []);

    const forgotPassword = useCallback(async (args) => {
        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/forgot-password`,
                {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: args.email,
                    }),
                }
            );

            if (res.ok) {
                const { data, errors } = await res.json();
                if (errors) throw new Error(errors[0].message);
                setUser(data?.loginUser?.user);
            } else {
                throw new Error("Invalid login");
            }
        } catch (e) {
            throw new Error("An error occurred while attempting to login.");
        }
    }, []);

    const resetPassword = useCallback(async (args) => {
        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/reset-password`,
                {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        password: args.password,
                        passwordConfirm: args.passwordConfirm,
                        token: args.token,
                    }),
                }
            );

            if (res.ok) {
                const { data, errors } = await res.json();
                if (errors) throw new Error(errors[0].message);
                setUser(data?.loginUser?.user);
                setStatus(data?.loginUser?.user ? "loggedIn" : undefined);
            } else {
                throw new Error("Invalid login");
            }
        } catch (e) {
            throw new Error("An error occurred while attempting to login.");
        }
    }, []);

    return (
        <Context.Provider
            value={{
                user,
                setUser,
                login,
                logout,
                resetPassword,
                forgotPassword,
                updateUser,
                removeItemFromWishlist,
                addItemToWishlist,
                isUpdating,
                status,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export const useAuth = () => useContext(Context);
