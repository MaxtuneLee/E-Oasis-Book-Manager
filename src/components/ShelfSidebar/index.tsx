"use client"
import { AlignLeft, Book, Binary, PenTool, Smile, Plus } from "lucide-react"
import FullButton from "../FullButton"
import { Button } from "../ui/button"
import { SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, Sheet } from "../ui/sheet"
import { usePathname } from "next/navigation"
import { useCallback } from "react"
import Link from "next/link"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { DialogClose } from "@radix-ui/react-dialog"

// million-ignore
const ShelfSidebar = () => {
    const path = usePathname()
    const type = path.split('/')[2]

    const addNewShelfSchema = z.object({
        shelfName: z.string().min(1),
        id: z.string().regex(/^[A-Za-z]/).min(1)
    })

    const addNewShelfSchemaForm = useForm<z.infer<typeof addNewShelfSchema>>({
        resolver: zodResolver(addNewShelfSchema),
        defaultValues: {
            shelfName: '',
            id: ''
        }
    })

    function onSubmit(values: z.infer<typeof addNewShelfSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

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
                    <div className=" w-full">
                        <Dialog>
                            <DialogTrigger>
                                <Button variant="outline" ><Plus className="mr-2 h-4 w-4" />添加书架</Button>
                            </DialogTrigger>
                            <Form {...addNewShelfSchemaForm}>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>添加新书架</DialogTitle>
                                        <form onSubmit={addNewShelfSchemaForm.handleSubmit(onSubmit)} className="space-y-8 pt-8">
                                            <FormField
                                                control={addNewShelfSchemaForm.control}
                                                name="shelfName"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>书架名称</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="your shelf name" {...field} />
                                                        </FormControl>
                                                        <FormDescription>
                                                            这是页面显示的书架名称
                                                        </FormDescription>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                            <FormField
                                                control={addNewShelfSchemaForm.control}
                                                name="id"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>书架 ID</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="your shelf id" {...field} />
                                                        </FormControl>
                                                        <FormDescription>
                                                            这是书架的唯一标识符
                                                        </FormDescription>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                            <DialogFooter>
                                                <DialogClose asChild>
                                                    <Button variant="outline">取消</Button>
                                                </DialogClose>
                                                <Button type="submit">确认</Button>
                                            </DialogFooter>
                                        </form>
                                    </DialogHeader>
                                </DialogContent>
                            </Form>
                        </Dialog>
                    </div>
                </div>
            </div >
        </>
    )
}

export default ShelfSidebar