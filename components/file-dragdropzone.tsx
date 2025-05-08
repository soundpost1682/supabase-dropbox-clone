'use client'

export default function FileDragDropZone(){
  return (
    <section className="w-full py-20 border-4 bordered-dotted border-indigo-700 flex flex-col items-center justify-center">
      <input type="file" className="" />
      <p>
        Drag files and drop here or click to upload
      </p>

    </section>
     
  )
}