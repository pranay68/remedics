"use client";

export function PDFButton() {
    const pdfPath = "/downloads/DGS_FLT3_Scientific_Overview.pdf";
    const viewPath = "/view/flt3-program-summary";

    return (
        <div className="flex flex-col gap-3 sm:flex-row">
            <a
                href={pdfPath}
                download
                className="btn-primary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105"
            >
                Download scientific overview
            </a>
            <a
                href={viewPath}
                className="btn-secondary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105"
            >
                View PDF
            </a>
        </div>
    );
}
