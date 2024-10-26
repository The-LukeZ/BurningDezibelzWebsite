export function load({ params, cookies, fetch }) {
    // If the user is not logged in, redirect to the login page
    // This is checked by a JWT token in the cookies

    const auth_token = cookies.get("auth_token");

    if (!auth_token) {
        return { redirect: "dash/login" };
    }

    // Fetch the page data from the server
    
}
