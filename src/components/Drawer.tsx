import StripeGift from "@/pages/StripeGift";
import { useEffect, useState } from "react";

export default function Navbar(probs: any) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header>
      {/* Drawer */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${probs.modal ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!probs.modal}
      >
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${probs.modal ? "opacity-100" : "opacity-0"}`}
          onClick={() => probs.setModal(false)}
        />

        <aside
          className={`fixed right-0 top-0 h-full w-[320px] transform bg-white p-6 shadow-2xl transition-transform duration-350 ${
            probs.modal ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Gift</h3>
            <button
              aria-label="Close menu"
              onClick={() => probs.setModal(false)}
              className="text-neutral-500 hover:text-neutral-800"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <StripeGift />
        </aside>
      </div>
    </header>
  );
}
