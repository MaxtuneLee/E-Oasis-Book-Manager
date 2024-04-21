import { AlignLeft, Book, Binary, PenTool, Smile } from "lucide-react"
import FullButton from "../FullButton"
import { Button } from "../ui/button"
import { SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, Sheet } from "../ui/sheet"

const ClassSidebar = () => {
    return (
        <>
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
        </>
    )
}

export default ClassSidebar