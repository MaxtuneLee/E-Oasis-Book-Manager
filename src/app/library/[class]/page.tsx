import FullButton from "@/components/FullButton"
import { LibraryBookCard } from "@/components/LibraryBookCard"
import { Button } from "@/components/ui/button"
import { SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, Sheet } from "@/components/ui/sheet"
import { Book, Binary, PenTool, Smile, BookMarked, AlignLeft, ChevronRight } from "lucide-react"

const Library = () => {
    return (
        <>
            {/* sidebar of classes */}
            <div className="block md:hidden col-span-8">
                <Sheet>
                    <SheetTrigger className="w-full">
                        <FullButton><AlignLeft className="mr-2 h-4 w-4" />藏书</FullButton>
                    </SheetTrigger>
                    <SheetContent className='w-screen flex justify-start flex-col'>
                        <SheetHeader className="text-left">
                            <SheetTitle>书本分类</SheetTitle>
                        </SheetHeader>
                        <SheetDescription className="flex justify-start w-full">
                            <div className="flex flex-col gap-2 justify-start mt-9 w-full">
                                <FullButton><Book className="mr-2 h-4 w-4" />全部</FullButton>
                                <FullButton><Binary className="mr-2 h-4 w-4" />技术</FullButton>
                                <FullButton><PenTool className="mr-2 h-4 w-4" />文学</FullButton>
                                <FullButton><Smile className="mr-2 h-4 w-4" />轻小说</FullButton>
                            </div>
                        </SheetDescription>
                    </SheetContent>
                </Sheet>
            </div>
            <div className="col-span-1 hidden md:block">
                <div className="flex flex-col gap-2">
                    <div className=" w-full">
                        <Button variant="ghost"><Book className="mr-2 h-4 w-4" />全部</Button>
                    </div>
                    <div className=" w-full">
                        <Button variant="ghost"><Binary className="mr-2 h-4 w-4" />技术</Button>
                    </div>
                    <div className=" w-full">
                        <Button variant="ghost"><PenTool className="mr-2 h-4 w-4" />文学</Button>
                    </div>
                    <div className=" w-full">
                        <Button variant="ghost"><Smile className="mr-2 h-4 w-4" />轻小说</Button>
                    </div>
                </div>
            </div>
            {/* main content */}
            <div className="col-span-8 grid grid-cols-3 gap-4 md:col-span-7 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
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