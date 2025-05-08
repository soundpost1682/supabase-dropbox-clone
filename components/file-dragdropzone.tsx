'use client'

import { Button } from "@material-tailwind/react"
import { uploadFile } from "actions/storageActions"
import { queryClient } from "config/ReactQueryClientProvider"
import { useMutation } from "@tanstack/react-query"
import { useRef } from "react"

export default function FileDragDropZone(){
  const fileRef = useRef(null)
  const uploadImageMutation = useMutation({
    mutationFn : uploadFile,
    onSuccess : ()=>{
      queryClient.invalidateQueries({
        queryKey : ['images'],
      })
    }
  })

  return (
    <form 
    onSubmit={async (e) => {
      e.preventDefault()
      const file = fileRef.current.files?.[0]
      if (file) {
        const formData = new FormData()
        formData.append('file', file)
        const result = await uploadImageMutation.mutate(formData)
        console.log(result)
      }
    }}
    className="w-full py-20 border-4 bordered-dotted border-indigo-700 flex flex-col items-center justify-center">
      <input ref={fileRef} type="file" className="" />
      <p>
        Drag files and drop here or click to upload
      </p>
      <Button 
      loading={uploadImageMutation.isPending}
      type="submit">Upload this file</Button>
    </form>
  )
}