import { NextRequest, NextResponse } from "next/server";
import {
  LOGIN_CHECK_ROUTES,
  LOGIN_ID,
  URL_PATH,
} from "./app/_constants/constants";
import { cookies } from "next/headers";
import { isPathInRoutes } from "./app/_utils";

export async function middleware(request: NextRequest) {
  const cookieStore = await cookies();
  const loginId = cookieStore.get(LOGIN_ID);

  const { pathname } = request.nextUrl;

  const isCheckPath = isPathInRoutes(LOGIN_CHECK_ROUTES, pathname);

  if (!loginId && isCheckPath) {
    return NextResponse.redirect(new URL(URL_PATH.LOGIN_URL, request.url));
  }
}
