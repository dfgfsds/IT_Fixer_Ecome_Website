import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const OLD_SHOP_IDS = new Set([
  '21024', '21165', '21094', '21027', '21159', '21036', '21141', '21062',
  '21034', '21088', '21235', '21075', '21017', '21206', '20980', '21136',
  '21257', '21181', '20988', '21010', '21160', '21016', '21219', '20972',
  '21097', '20973', '21143', '21022', '21193', '21129', '21223', '21083',
  '20718', '21227', '21184', '20756', '20301', '20089',
]);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const host = request.headers.get('host') || '';

  // 1. Subdomain: deleteaccount.itfixer.in -> Redirect to home
  if (host.includes('deleteaccount')) {
    return NextResponse.redirect(new URL('https://www.itfixer.in/', request.url), 301);
  }

  // 2. Subdomain: auth.itfixer.in (except firebase auth rewrites) -> Redirect to home
  if (host.includes('auth.itfixer.in') && !pathname.startsWith('/__/auth')) {
    return NextResponse.redirect(new URL('https://www.itfixer.in/', request.url), 301);
  }

  // 3. Old Shop URLs: /shop/21024 or any numeric ID -> Redirect to /shop
  if (pathname.startsWith('/shop/')) {
    const slug = pathname.replace(/^\/shop\//, '').replace(/\/$/, '');
    if (/^\d+$/.test(slug) || OLD_SHOP_IDS.has(slug)) {
      return NextResponse.redirect(new URL('/shop', request.url), 301);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match specific routes only:
     * - shop subpaths
     * - root path
     * Never match _next/static, _next/image, css, js, or assets
     */
    '/shop/:path*',
    '/',
    '/((?!api|_next/static|_next/image|assets|images|favicon\\.ico|.*\\.(?:jpg|jpeg|png|gif|svg|webp|ico|woff|woff2|ttf|css|js)).*)',
  ],
};
