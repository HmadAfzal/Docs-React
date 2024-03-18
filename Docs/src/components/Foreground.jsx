import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {
  const ref=useRef(null);
  const data=[{
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing.",
    filesize:".4mb",
    isCloseable:false,
    tag:{
      isOpen:true,
      title:"Download Now",
      color:"green"
    }
  },
  {
    desc:"Accusantium, libero. Doloremque, ea labore. Dolor, dolorem doloremque eius error, et. ex, exercitationem harum illo ipsa labore laudantium maiores molestias",
    filesize:".9mb",
    isCloseable:true,
    tag:{
      isOpen:false,
      title:"download Now",
      color:"green"
    }
  },
  {
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing.",
    filesize:".18mb",
    isCloseable:true,
    tag:{
      isOpen:true,
      title:"Upload Now",
      color:"blue"
    }
  },
  {
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing.",
    filesize:".7mb",
    isCloseable:false,
    tag:{
      isOpen:true,
      title:"Download Now",
      color:"green"
    }
  },
  {
    desc:"Error displaying file!",
    filesize:"479mb",
    isCloseable:false,
    tag:{
      isOpen:false,
      title:"download Now",
      color:"green"
    }
  },
  {
    desc:"Accusantium, libero. Doloremque, ea labore. Dolor, dolorem doloremque eius error, et. ex, exercitationem harum illo ipsa labore laudantium maiores molestias",
    filesize:"5mb",
    isCloseable:true,
    tag:{
      isOpen:false,
      title:"download Now",
      color:"green"
    }
  },
  {
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing.",
    filesize:".78mb",
    isCloseable:true,
    tag:{
      isOpen:true,
      title:"Upload Now",
      color:"blue"
    }
  }]

  return (
  <div ref={ref} className=' fixed top-0 left-0 w-full h-full z-[5] flex gap-8 p-10 flex-wrap' >
   {data.map((data)=>(

    <Card data={data} reference={ref}/>
    
   ))}
   
  </div>
  )
}

export default Foreground