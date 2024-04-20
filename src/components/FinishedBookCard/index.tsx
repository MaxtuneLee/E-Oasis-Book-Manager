import Image from 'next/image'
export const FinishedBookCard = ({ image, name, author, progress, type }: { image: string, name: string, author: NamedCurve, progress: string, type: string }) => {
    return (
        <div className="relative p-4 rounded-md shadow-md flex items-start gap-3 overflow-hidden select-none cursor-pointer transition-all hover:scale-105 hover:shadow-lg">
            <Image src={`${image}`} width={75} height={113} alt="cover" className="z-10 rounded-sm shadow-sm w-[75px] h-[113px] object-cover"></Image>
            <div className="z-10">
                <h3 className="text-xl font-bold text-black line-clamp-2">{name}</h3>
                <p className="text-black line-clamp-1">{author}</p>
                <div className="text-black opacity-60">{type} · {progress}%</div>
            </div>
        </div>
    )
}