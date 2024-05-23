import React from "react";
import Link from "next/link";
const CheckoutPrompt = ({ user, status }) => {
    return (
        <div className="checkout__prompt">
            {status != "loggedIn" ? (
                <div className="checkout__prompt__info mb-8">
                    <label className="font-normal text-xl oswald tracking-wider">
                        <span>Create an Account</span>
                    </label>
                    <p className="mt-1">
                        Already have an account?{" "}
                        <Link href="/login" className="link">
                            Sign In
                        </Link>
                    </p>
                </div>
            ) : (
                <div className="checkout__prompt__info mb-2">
                    <label className="font-normal text-xl oswald tracking-wider">
                        <span>Account Information</span>
                    </label>
                </div>
            )}

            <p className="checkout__prompt__info mb-8">
                We{"'"}ll use your email address to send you order confirmation.
            </p>
        </div>
    );
};

export default CheckoutPrompt;
