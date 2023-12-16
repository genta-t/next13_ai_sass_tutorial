import Image from "next/image";

const Loader = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="h-10 w-10 relative animate-spin">
        <Image
          alt="logo"
          fill
          src="/logo.png"
        />
      </div>
      <p className="text-muted-foreground text-sm">
        天才は考えています...
      </p>
    </div>
  )
}

export default Loader;