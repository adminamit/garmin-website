import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const getMeUser = async (args) => {
    const { nullUserRedirect, validUserRedirect } = args || {};
    const cookie = cookies();
    const token = cookie.get("payload-token")?.value;

    const meUserReq = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/me`,
        {
            headers: {
                Authorization: `JWT ${token}`,
            },
        }
    );

    const { user } = await meUserReq.json();

    if (validUserRedirect && meUserReq.ok && user) {
        redirect(validUserRedirect);
    }

    if (nullUserRedirect && (!meUserReq.ok || !user)) {
        redirect(nullUserRedirect);
    }

    return {
        user,
        token,
    };
};
