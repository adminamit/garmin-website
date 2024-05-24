import cookie from "cookie";

export async function POST(request, response) {
    const TOKEN_NAME = "payload-token";
    const { expiresIn, accessToken } = await request.json();
    const cookieObj = {
        expiresIn,
        accessToken,
    };
    return new Response(JSON.stringify({ cookieObj }), {
        status: 200,
        headers: {
            "Set-Cookie": cookie.serialize(TOKEN_NAME, accessToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV !== "development",
                maxAge: expiresIn,
                // sameSite: "strict",
                path: "/",
            }),
        },
    });
}
