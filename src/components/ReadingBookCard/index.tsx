import Image from 'next/image'
export const ReadingBookCard = ({ image, name, author, progress, type }: { image: string, name: string, author: NamedCurve, progress: string, type: string }) => {
    return (
        <div className="flex-shrink-0 w-96 relative p-4 rounded-md shadow-md flex items-start gap-3 overflow-hidden select-none cursor-pointer transition-all hover:scale-105 hover:shadow-lg">
            <div style={{
                zIndex: 0,
                position: 'absolute',
                background: `url(${image})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                filter: 'blur(25px)brightness(0.6)',
                scale: 1.8
            }}></div>
            <Image src={`${image}`} width={75} height={113} alt="cover" className="z-10 rounded-sm shadow-sm w-[75px] h-[113px] object-cover"></Image>
            <div className="z-10">
                <h3 className="text-xl font-bold text-white line-clamp-2">{name}</h3>
                <p className="text-white line-clamp-1">{author}</p>
                <div className="text-white opacity-60">{type} · {progress}%</div>
            </div>
        </div>
    )
}