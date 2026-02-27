"use client";

export function PDFButton() {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    fetch("/downloads/flt3-summary.pdf", { method: "HEAD" }).then((r) => {
      if (!r.ok) {
        e.preventDefault();
        alert("Summary PDF coming soon.");
      }
    });
  }

  return (
    <a
      href="/downloads/flt3-summary.pdf"
      onClick={handleClick}
      className="btn-primary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105"
    >
      Download PDF
    </a>
  );
}
