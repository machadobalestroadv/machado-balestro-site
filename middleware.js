import { NextResponse } from 'next/server';

export function middleware(request) {
  const host = request.headers.get('host') || '';
  const url = request.nextUrl.clone();

  // Se acessar sistema.machadobalestro.com.br sem path específico
  if (host.startsWith('sistema.') && url.pathname === '/') {
    url.pathname = '/sistema-mb.html';
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/',
};
