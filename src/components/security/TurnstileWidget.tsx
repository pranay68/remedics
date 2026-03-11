"use client";

import { useEffect, useRef } from "react";

declare global {
    interface Window {
        turnstile?: {
            render: (
                container: HTMLElement,
                options: {
                    sitekey: string;
                    theme?: "light" | "dark" | "auto";
                    callback?: (token: string) => void;
                    "expired-callback"?: () => void;
                    "error-callback"?: () => void;
                },
            ) => string;
            remove: (widgetId: string) => void;
        };
    }
}

let turnstileScriptPromise: Promise<void> | null = null;

function loadTurnstileScript() {
    if (turnstileScriptPromise) return turnstileScriptPromise;

    turnstileScriptPromise = new Promise((resolve, reject) => {
        const existing = document.querySelector<HTMLScriptElement>('script[data-turnstile="true"]');
        if (existing) {
            if (window.turnstile) {
                resolve();
                return;
            }

            existing.addEventListener("load", () => resolve(), { once: true });
            existing.addEventListener("error", () => reject(new Error("Failed to load Turnstile.")), { once: true });
            return;
        }

        const script = document.createElement("script");
        script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
        script.async = true;
        script.defer = true;
        script.dataset.turnstile = "true";
        script.onload = () => resolve();
        script.onerror = () => reject(new Error("Failed to load Turnstile."));
        document.head.appendChild(script);
    });

    return turnstileScriptPromise;
}

export function TurnstileWidget({ onTokenChange }: { onTokenChange: (token: string) => void }) {
    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
    const containerRef = useRef<HTMLDivElement | null>(null);
    const widgetIdRef = useRef<string | null>(null);

    useEffect(() => {
        if (!siteKey || !containerRef.current) return;

        let mounted = true;

        loadTurnstileScript()
            .then(() => {
                if (!mounted || !containerRef.current || !window.turnstile) return;

                widgetIdRef.current = window.turnstile.render(containerRef.current, {
                    sitekey: siteKey,
                    theme: "dark",
                    callback: (token) => onTokenChange(token),
                    "expired-callback": () => onTokenChange(""),
                    "error-callback": () => onTokenChange(""),
                });
            })
            .catch(() => onTokenChange(""));

        return () => {
            mounted = false;
            if (widgetIdRef.current && window.turnstile) {
                window.turnstile.remove(widgetIdRef.current);
            }
        };
    }, [onTokenChange, siteKey]);

    if (!siteKey) return null;

    return (
        <div className="space-y-2">
            <div ref={containerRef} />
            <p className="text-[11px] text-white/35">Protected by Turnstile.</p>
        </div>
    );
}