import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const maintenanceEnabled =
  process.env.NODE_ENV === "production" && process.env.MAINTENANCE_MODE !== "off";

function htmlResponse(body: string) {
  return new NextResponse(body, {
    status: 503,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store, max-age=0",
      "retry-after": "3600",
      "x-robots-tag": "noindex, nofollow, noarchive",
    },
  });
}

function jsonResponse(payload: unknown) {
  return new NextResponse(JSON.stringify(payload), {
    status: 503,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store, max-age=0",
      "retry-after": "3600",
      "x-robots-tag": "noindex, nofollow, noarchive",
    },
  });
}

export function middleware(request: NextRequest) {
  if (!maintenanceEnabled) return NextResponse.next();

  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/api/")) {
    return jsonResponse({
      status: "maintenance",
      message: "Aternox is under construction. Please try again soon.",
    });
  }

  const page = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex,nofollow,noarchive" />
    <title>Aternox — Under construction</title>
    <style>
      :root { color-scheme: dark; }
      html, body { height: 100%; margin: 0; }
      body {
        background: #000;
        color: #fff;
        font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .wrap { max-width: 720px; padding: 48px; }
      .k { letter-spacing: 0.18em; text-transform: uppercase; color: rgba(255,255,255,0.7); font-size: 12px; }
      h1 { margin: 12px 0 0; font-size: 42px; letter-spacing: -0.03em; }
      p { margin: 16px 0 0; font-size: 18px; line-height: 1.6; color: rgba(255,255,255,0.72); }
      .hint { margin-top: 24px; font-size: 14px; color: rgba(255,255,255,0.55); }
      .box { margin-top: 24px; border: 1px solid rgba(255,255,255,0.12); border-radius: 18px; padding: 18px 18px; background: rgba(255,255,255,0.03); }
    </style>
  </head>
  <body>
    <main class="wrap">
      <div class="k">Aternox</div>
      <h1>Under construction</h1>
      <p>We’re making updates. Please check back soon.</p>
      <div class="box">
        <div class="hint">Status</div>
        <div>503 — maintenance</div>
      </div>
    </main>
  </body>
</html>`;

  return htmlResponse(page);
}

export const config = {
  matcher: ["/:path*"],
};
