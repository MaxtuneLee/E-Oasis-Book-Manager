"use client"

// million-ignore
export default function LibraryLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="p-7">
            <h1 className="text-4xl font-bold">Library</h1>
            <div className="py-7 grid grid-cols-8 gap-9">
                {children}
            </div>
        </main>
    );
}
