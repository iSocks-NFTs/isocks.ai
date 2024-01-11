import { NextResponse } from "next/server";
const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://isocks.ai"
    : "http://localhost:3000";

export async function middleware(req) {
  const url = req.url;
  if (url.includes("/dashboard/auth")) {
    const cookie = req.cookies.get("user");
    console.log("Checking for cookies in Auth Page", cookie);
    if (cookie) {
      console.log("Session Exists, redirecting to Admin Dashboard...");
      return NextResponse.redirect(`${baseURL}/dashboard/admin`);
    }
  }

  if (url.includes("/admin")) {
    const cookie = req.cookies.get("user");
    console.log("Checking for cookies in Admin page", cookie);
    if (!cookie) {
      console.log("No Session exists, redirecting to Login...");
      return NextResponse.redirect(`${baseURL}/dashboard/auth`);
    }
  }

  if (url.includes("/store/login") || url.includes("/store/signup")) {
    const cookie = req.cookies.get("isocks_store_user");
    if (cookie) {
      console.log("Store Session Exists, Redirecting to Profile");
      return NextResponse.redirect(`${baseURL}/store/profile`);
    }
  }

  if (url.includes("/store/profile")) {
    const cookie = req.cookies.get("isocks_store_user");
    if (!cookie) {
      console.log("No Session Exists, redirecting to Login");
      return NextResponse.redirect(`${baseURL}/store/login`);
    }
  }

  return NextResponse.next();
}
