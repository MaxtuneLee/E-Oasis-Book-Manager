"use client"
import Image from 'next/image'
import { AspectRatio } from '../ui/aspect-ratio'
import { Suspense, useState } from 'react'
import { Skeleton } from '../ui/skeleton'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import { Button } from '../ui/button'
import { BookMarked } from 'lucide-react'
export const LibraryBookCard = ({ image, name, author, progress, type }: { image: string, name: string, author: NamedCurve, progress: string, type: string }) => {
    const [hover, setHover] = useState(false)
    return (
        <Suspense fallback={<><Skeleton className="w-[75px] h-[113px]"></Skeleton></>}>
            <Sheet>
                <SheetTrigger>
                    <AspectRatio ratio={75 / 113} onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)} className="relative select-none cursor-pointer transition-all rounded-lg shadow-md overflow-hidden hover:scale-105 hover:shadow-xl">
                        <Image src={image} sizes='100' fill alt="cover" className="absolute t-0 h-0 transition-all object-cover z-0"
                            style={hover ? {
                                filter: 'blur(2px)brightness(0.6)',
                                scale: 1.3
                            } : {}}
                        ></Image>
                        {
                            hover && (
                                <div className='text-white'>
                                    <div className="z-10 absolute bottom-4 left-4 text-left">
                                        <h3 className="text-base font-bold line-clamp-2 md:text-xl ">{name}</h3>
                                        <p className="text-xs line-clamp-1 md:text-base">{author}</p>
                                        <div className="text-xs opacity-60 md:text-base">{type}</div>
                                    </div>
                                    <div className='z-10 absolute top-4 right-4 text-right'>
                                        <span className='text-sm opacity-70 md:text-base'>阅读进度</span>
                                        <div className="text-xl font-extrabold md:text-4xl">{progress}%</div>
                                    </div>
                                </div>
                            )
                        }
                    </AspectRatio>
                </SheetTrigger>
                <SheetContent className='w-screen md:w-[384px]'>
                    <SheetHeader>
                        <SheetTitle>书本详情</SheetTitle>
                        <SheetDescription>
                            {/* <div className='absolute top-0 left-0 h-64 w-full overflow-hidden z-0'>
                                <Image src={image} sizes='100' fill alt="cover" className="w-full h-full rounded-lg shadow-md scale-[2] blur-lg brightness-50"></Image>
                            </div> */}
                            <div className='grid grid-cols-4 gap-5 mt-5'>
                                <Image src={image} sizes='100' height={135} width={75} alt="cover" className="rounded-lg shadow-md col-span-1"></Image>
                                <div className="col-span-3 text-black text-left">
                                    <h3 className="text-xl font-bold line-clamp-2 ">{name}</h3>
                                    <p className="line-clamp-1 ">{author}</p>
                                    <div className="opacity-60">{type}</div>
                                </div>
                            </div>
                            <Button className='w-full mt-4'><BookMarked className="mr-2 h-4 w-4" />继续阅读 · {progress}%</Button>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </Suspense>
    )
}