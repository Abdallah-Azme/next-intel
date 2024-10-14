import { NextRequest } from "next/server";

import createIntlMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intlMiddleware = createIntlMiddleware(routing);

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  console.log({ pathname });

  const locale = request.nextUrl.pathname.split("/").at(1);
  console.log({ locale });

  const pathWithoutLocale = request.nextUrl.pathname.replace(`/${locale}`, "");

  console.log({ pathWithoutLocale });

  // const loginUrl = new URL(`/${locale}/`, request.nextUrl.origin);
  // if (!false) {
  //   // Redirect to localized login page based on locale
  //   return NextResponse.redirect(loginUrl);
  // }

  return intlMiddleware(request);
}
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
