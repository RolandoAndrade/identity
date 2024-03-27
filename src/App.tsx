import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from 'react';

type FaceData = {
  name: string
  position: string;
}

function App() {

  const [image, setImage] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const [url, setUrl] = useState<string>("")
  const [data, setData] = useState<FaceData>({
    name: "No encontrado",
    position: "NA"
  })

  function search() {
    setLoading(true)
    fetch(`${url}/?image_url=${image}`)
      .then(response => response.json())
      .then(data => {
        setData({
          name: data.name,
          position: data.position
        })
      }).finally(() => {
        setLoading(false)
    })
  }

  useEffect(() => {
    if (!image.length || image === "/placeholder.svg") return
    search()
  }, [image]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImage(event.target.value)
  }

  return (
    <main className={'flex flex-row items-center justify-center h-screen'}>
      <Input className={'fixed top-1 max-w-[400px]'} placeholder={'http://ngrok.com/abc'} onChange={(e) => {
        setUrl(e.target.value)
        search()
      }}/>
      <div className="flex flex-col items-center space-y-2">
        <div className="flex items-center space-x-2">
          <LockIcon className="h-6 w-6"/>
          <h2 className="text-2xl font-bold">Identity</h2>
        </div>
        <div className="grid w-full max-w-md items-center gap-2">
          <Label htmlFor="image">URL de la imagen</Label>
          <Input id="image" placeholder="www.example.com/image.png" onChange={handleImageChange}/>
        </div>
        <div className="flex items-center space-x-2 w-[400px]">
          <img
            alt="Image"
            className="rounded-md overflow-hidden"
            height="100"
            defaultValue={"/placeholder.svg"}
            src={image}
            style={{
              aspectRatio: "100/100",
              objectFit: "cover",
            }}
            onError={() => {
              setImage("/placeholder.svg")
            }}
            onLoadStart={() => {
            }}
            onLoad={(event) => {
              console.log(event)
            }}
            width="100"
          />
          {loading ? (
            <p>Identificando...</p>
          ): (
            <div className="grid gap-0.5">
              <p className="text-sm font-medium">{
                data.name
              }</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {
                  data.position
                }
              </p>
            </div>
          )}

        </div>
      </div>
    </main>

  )
}
type LockIconProps = React.ComponentProps<'svg'>;
function LockIcon(props: LockIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  )
}

export default App
