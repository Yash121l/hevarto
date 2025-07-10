'use client'

export function BackgroundBlobs() {
    return (
        <>
            <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-cyan-500/20 blur-[150px] rounded-full animate-pulse"></div>
            <div className="absolute bottom-[-120px] right-[-80px] w-[300px] h-[300px] bg-green-500/20 blur-[120px] rounded-full animate-pulse"></div>
        </>
    )
}