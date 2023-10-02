import  { withAuth } from "next-auth/middleware";

export default withAuth(async function middleware(res) {});


export const config = {
    matcher: ["/me"]
}



