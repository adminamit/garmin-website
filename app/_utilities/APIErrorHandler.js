export const ApiHandler = async (url, args, options) => {
    const method = options?.method || "POST";

    try {
        const res = await fetch(url, {
            method,
            ...(method === "POST" ? { body: JSON.stringify(args) } : {}),
            credentials: "include",

            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": "true",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,DELETE,PATCH,POST,PUT",
                "Access-Control-Allow-Headers":
                    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
                "content-type": "application/json",
                ...options?.headers,
            },
            ...options,
        });

        const { errors, user } = await res.json();

        if (errors) {
            throw new Error(errors[0].message);
        }

        if (res.ok) {
            return user;
        }
    } catch (e) {
        throw new Error(e);
    }
};
