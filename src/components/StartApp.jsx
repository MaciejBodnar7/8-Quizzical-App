import React from "react"
import "../App.css"

export default function StartApp(props) {
  console.log(props)
  return (
    <>
      <main className="flex flex-col justify-center items-center w-full h-full gap-2 relative">
        <h1 className="text-4xl font-medium">Quizzical</h1>
        <p>Some description if needed</p>
        <button className="btn px-16 py-3 mt-5 rounded-xl" onClick={props.switchScreens}>
          Start quiz
        </button>
        <img src="../../public/blobs.png" alt="" className="bg-blobs" />
        <img src="../../public/blobs2.png" alt="" className="bg-blobsTwo" />
      </main>
    </>
  )
}
