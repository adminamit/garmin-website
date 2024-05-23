"use client";
// import { cookies } from "next/headers";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/_providers/Auth";
export const SignOut = () => {
    const router = useRouter();
    const { logout } = useAuth();
    // const cookie = cookies();
    const signOut = async () => {
        try {
            await logout();
            // cookie.delete("payload-token");
            router.push("/");
        } catch (_) {
            // setError("You are already logged out.");
            alert("Something went wrong");
        }
    };

    return (
        <div
            onClick={() => {
                signOut();
            }}
        >
            Signout
        </div>
    );
};
