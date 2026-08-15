import { siteConfig } from "@/lib/site";

export function PinterestFollowCta() {
  return (
    <aside className="container-main py-5 sm:py-6">
      <div className="flex justify-end">
        <div className="flex flex-col items-end gap-1.5">
          <p className="text-sm font-medium text-ink">Follow us on</p>
          <a
            href={siteConfig.pinterestUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Flower Drawing Guides on Pinterest"
            className="inline-flex min-h-11 min-w-11 items-center justify-center text-ink transition hover:opacity-80"
          >
            <svg
              className="h-9 w-9"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.012-4.869-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z" />
            </svg>
          </a>
        </div>
      </div>
    </aside>
  );
}
