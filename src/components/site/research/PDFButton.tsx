"use client";

export function PDFButton() {
    const pdfPath = "/downloads/flt3-summary.pdf";
    const viewPath = "/view/flt3-program-summary";

    function guardMissingPdf(e: React.MouseEvent<HTMLAnchorElement>) {
        fetch(pdfPath, { method: "HEAD" }).then((r) => {
            if (!r.ok) {
                e.preventDefault();
                alert("Summary PDF coming soon.");
            }
        });
    }

    return (
        <div className="flex flex-col gap-3 sm:flex-row">
            <a
                href={pdfPath}
                download
                onClick={guardMissingPdf}
                className="btn-primary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105"
            >
                Download PDF
            </a>
            <a
                href={viewPath}
                onClick={guardMissingPdf}
                className="btn-secondary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105"
            >
                View PDF
            </a>
        </div>
    );
}
