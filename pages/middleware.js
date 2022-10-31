import { NextResponse } from "next/server";

export function middleware(req) {
  const { cookies } = req;
  const url = req.url;


  if(url.includes("/admin")){
    if(req.cookies.has("user")){
        return NextResponse.redirect("/dashboard/admin")
    } else {
        return NextResponse.redirect("/dashboard/auth")
    }
  }

  return NextResponse.next();
}
