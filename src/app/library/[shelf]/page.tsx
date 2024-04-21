"use client"
import ShelfSidebar from "@/components/ShelfSidebar"
import FullButton from "@/components/FullButton"
import { LibraryBookCard } from "@/components/LibraryBookCard"
import { Button } from "@/components/ui/button"
import { SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, Sheet } from "@/components/ui/sheet"
import { Book, Binary, PenTool, Smile, BookMarked, AlignLeft, ChevronRight } from "lucide-react"

const Library = () => {
    return (
        <>
            {/* sidebar of classes */}
            <ShelfSidebar />
            {/* main content */}
            <div className="col-span-8 grid grid-cols-3 gap-4 md:col-span-7 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9">
                <LibraryBookCard image='/cover.jpg' name="You Don't Know JS" author="Kyle Simpson" progress="20" type="技术" />
                <LibraryBookCard image='/cover2.webp' name="Educated" author="Tara Westover" progress="50" type="文学" />
                <LibraryBookCard image='/cover3.jpg' name="OVERLORD (15) 半森林精靈的神人 上" author="丸山くがね" progress="99" type="轻小说" />
                <LibraryBookCard image='/cover4.jpg' name="临高启明" author="元老院" progress="98" type="文学" />
                <LibraryBookCard image='/cover.jpg' name="You Don't Know JS" author="Kyle Simpson" progress="20" type="技术" />
                <LibraryBookCard image='/cover2.webp' name="Educated" author="Tara Westover" progress="50" type="文学" />
                <LibraryBookCard image='/cover3.jpg' name="OVERLORD (15) 半森林精靈的神人 上" author="丸山くがね" progress="99" type="轻小说" />
                <LibraryBookCard image='/cover4.jpg' name="临高启明" author="元老院" progress="98" type="文学" />
                <LibraryBookCard image='/cover.jpg' name="You Don't Know JS" author="Kyle Simpson" progress="20" type="技术" />
                <LibraryBookCard image='/cover2.webp' name="Educated" author="Tara Westover" progress="50" type="文学" />
                <LibraryBookCard image='/cover3.jpg' name="OVERLORD (15) 半森林精靈的神人 上" author="丸山くがね" progress="99" type="轻小说" />
                <LibraryBookCard image='/cover4.jpg' name="临高启明" author="元老院" progress="98" type="文学" />
                <LibraryBookCard image='/cover.jpg' name="You Don't Know JS" author="Kyle Simpson" progress="20" type="技术" />
                <LibraryBookCard image='/cover2.webp' name="Educated" author="Tara Westover" progress="50" type="文学" />
                <LibraryBookCard image='/cover3.jpg' name="OVERLORD (15) 半森林精靈的神人 上" author="丸山くがね" progress="99" type="轻小说" />
                <LibraryBookCard image='/cover4.jpg' name="临高启明" author="元老院" progress="98" type="文学" />
                <LibraryBookCard image='/cover.jpg' name="You Don't Know JS" author="Kyle Simpson" progress="20" type="技术" />
                <LibraryBookCard image='/cover2.webp' name="Educated" author="Tara Westover" progress="50" type="文学" />
                <LibraryBookCard image='/cover3.jpg' name="OVERLORD (15) 半森林精靈的神人 上" author="丸山くがね" progress="99" type="轻小说" />
                <LibraryBookCard image='/cover4.jpg' name="临高启明" author="元老院" progress="98" type="文学" />
            </div></>
    )
}

export default Library