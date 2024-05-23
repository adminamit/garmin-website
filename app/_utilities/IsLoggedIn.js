import { cookies } from "next/headers";
export const IsLoggedIn = () => {
    const cookie = cookies();
    const response = cookie.get("payload-token") ? true : false;

    return response;
};
