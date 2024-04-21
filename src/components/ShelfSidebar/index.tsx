"use client"
import { AlignLeft, Book, Binary, PenTool, Smile } from "lucide-react"
import FullButton from "../FullButton"
import { Button } from "../ui/button"
import { SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, Sheet } from "../ui/sheet"
import { usePathname } from "next/navigation"
import { useCallback } from "react"
import Link from "next/link"

// million-ignore
const ShelfSidebar = () => {
    const path = usePathname()
    const type = path.split('/')[2]

    const calButtonType = useCallback((currentType: string) => {
        if (currentType === type) {
            return 'default'
        } else {
            return 'ghost'
        }
    }, [type])

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
                                <FullButton><Link href='./all'><Book className="mr-2 h-4 w-4" />全部</Link></FullButton>
                                <FullButton><Link href='./tech'><Binary className="mr-2 h-4 w-4" />技术</Link></FullButton>
                                <FullButton><Link href='./literature'><PenTool className="mr-2 h-4 w-4" />文学</Link></FullButton>
                                <FullButton><Link href='./light-novel'><Smile className="mr-2 h-4 w-4" />轻小说</Link></FullButton>
                            </div>
                        </SheetDescription>
                    </SheetContent>
                </Sheet>
            </div>
            <div className="col-span-1 hidden md:block">
                <div className="flex flex-col gap-2">
                    <div className=" w-full">
                        <Button variant={calButtonType('all')} asChild><Link href='./all'><Book className="mr-2 h-4 w-4" />全部</Link></Button>
                    </div>
                    <div className=" w-full">
                        <Button variant={calButtonType('tech')} asChild><Link href='./tech'><Binary className="mr-2 h-4 w-4" />技术</Link></Button>
                    </div>
                    <div className=" w-full">
                        <Button variant={calButtonType('literature')} asChild><Link href='./literature'><PenTool className="mr-2 h-4 w-4" />文学</Link></Button>
                    </div>
                    <div className=" w-full">
                        <Button variant={calButtonType('light-novel')} asChild><Link href='./light-novel'><Smile className="mr-2 h-4 w-4" />轻小说</Link></Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShelfSidebar