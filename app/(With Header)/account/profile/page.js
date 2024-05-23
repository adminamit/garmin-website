"use client";
import { useState } from "react";
import Link from "next/link";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "../error";
import { AccountMenu } from "@/app/_components/Account/Menu";
import { EditProfileForm } from "@/app/_components/Account/Profile/EditProfile";
import UpdatePasswordForm from "@/app/_components/Account/Profile/UpdatePassword";
import { useAuth } from "@/app/_providers/Auth";
import { Loader } from "@/app/_components/Loader";
const Profile = () => {
    const { user, updateUser } = useAuth();
    const [isProfileFormVisible, setIsProfileFormVisible] = useState(false);
    const [isPasswordUpdateFormVisible, setIsPasswordUpdateFormVisible] =
        useState(false);

    const handeIsProfileFormVisible = (state) => {
        setIsProfileFormVisible(state);
    };

    const handeIsPasswordUpdateFormVisible = (state) => {
        setIsPasswordUpdateFormVisible(state);
    };

    return (
        <>
            <div className="heading mb-6">
                <h2 className="">ACCOUNT DETAILS</h2>
            </div>
            {user ? (
                <>
                    {!isProfileFormVisible && !isPasswordUpdateFormVisible ? (
                        <div className="details-wrapper flex gap-8">
                            <div className="details-info mb-4 flex-1">
                                <p>Name: {user.full_name}</p>
                                <p>Email: {user.email}</p>
                                <p>Location: India</p>
                                <p>Language: English (India)</p>
                                <p>Password: *********</p>
                            </div>

                            <div className="flex-1">
                                <button
                                    className="button"
                                    onClick={() =>
                                        setIsProfileFormVisible(true)
                                    }
                                >
                                    Edit
                                </button>
                                <button
                                    className="button"
                                    onClick={() =>
                                        setIsPasswordUpdateFormVisible(true)
                                    }
                                >
                                    UPDATE PASSWORD
                                </button>
                                <button className="button">
                                    <Link href="/account/address">
                                        Address Management
                                    </Link>
                                </button>
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                    <div>
                        {isProfileFormVisible ? (
                            <ErrorBoundary fallback={Error}>
                                <EditProfileForm
                                    setIsProfileFormVisible={
                                        setIsProfileFormVisible
                                    }
                                    user={user}
                                    updateUser={updateUser}
                                />
                            </ErrorBoundary>
                        ) : (
                            ""
                        )}
                        {isPasswordUpdateFormVisible ? (
                            <UpdatePasswordForm
                                isVisible={setIsPasswordUpdateFormVisible}
                                updateUser={updateUser}
                            />
                        ) : (
                            ""
                        )}
                    </div>
                </>
            ) : (
                <Loader></Loader>
            )}
        </>
    );
};

export default Profile;
