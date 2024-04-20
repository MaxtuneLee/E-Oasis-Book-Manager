"use client"

import { FinishedBookCard } from "@/components/FinishedBookCard";
import { ReadingBookCard } from "@/components/ReadingBookCard";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-7">
      <h1 className="text-4xl font-bold">Home</h1>
      今天阅读了 50 分钟，继续保持哦！
      <div className="py-7">
        {/** 继续阅读 */}
        <h2 className=" pb-5 text-2xl font-semibold">继续阅读</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <ReadingBookCard image='/cover.jpg' name="You Don't Know JS" author="Kyle Simpson" progress="20" type="技术" />
          <ReadingBookCard image='/cover2.webp' name="Educated" author="Tara Westover" progress="50" type="文学" />
          <ReadingBookCard image='/cover4.jpg' name="临高启明" author="元老院" progress="98" type="文学" />
        </div>
      </div>
      <div className="py-7">
        {/** 继续阅读 */}
        <h2 className=" pb-5 text-2xl font-semibold items-center flex">之前读过<ChevronRight className=" inline-block opacity-60" /></h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <FinishedBookCard image='/cover3.jpg' name="OVERLORD (15) 半森林精靈的神人 上" author="丸山くがね" progress="99" type="轻小说" />
          <FinishedBookCard image='/cover4.jpg' name="临高启明" author="元老院" progress="98" type="文学" />
        </div>
      </div>
    </main>
  );
}
