import { NextResponse } from "next/server";

export async function middleware(req) {
  const url = req.url;
  if (url.includes("/dashboard/auth")) {
    const cookie = req.cookies.get("user");
    console.log("Checking for cookies in Auth Page", cookie);
    if (cookie) {
      console.log("Session Exists, redirecting to Admin Dashboard...");
      return NextResponse.redirect("http://127.0.0.1:3000/dashboard/admin");
    }
  }

  if (url.includes("/admin")) {
    const cookie = req.cookies.get("user");
    console.log("Checking for cookies in Admin page", cookie);
    if (!cookie) {
      console.log("No Session exists, redirecting to Login...");
      return NextResponse.redirect("http://127.0.0.1:3000/dashboard/auth");
    }
  }

  return NextResponse.next();
}
