import { Link } from "react-router-dom";

interface variable {
  id:number;
  authorname: string;
  content: string;
  date: string;
  title: string;
}

export function Blogscard({authorname, content, date, title ,id}: variable) {
  return <Link to={`/blog/${id}`}>
    <div className=" p-4  border-b border-slate-250 pb-4 w-screen max-w-screen-md cursor-pointer">
      <div className="flex pb-1">
        <div className="flex justify-center flex-col ">
           <Avatar authorname={authorname} /> 
        </div>
        
        <div className="font-light pl-2  ">
          {authorname} 
          </div>
          <div className="flex justify-center flex-col pl-2">
            <Circle/>
          </div>
          <div className="pl-2 font-thin  text-slate-500">
               {date}
          </div>
          
      </div>
      <div className="text-xl font-semibold">{title}</div>
      <div className="text-sm font-thin">{content.slice(0, 100) + "..."}</div>
      <div className="text-xs font-thin  pt-4 text-slate-400">{`${Math.ceil(content.length / 100)} Minute(s) read`}</div>
    </div>
  </Link>
}

function Circle() {
  return <div className="h-1 w-1 rounded-full bg-slate-500 flex-col">

  </div>
}

export function Avatar({ authorname ,size="small"}: {authorname:string,size?:"small"|"big"}) {
  return <div>
    <div className={`relative inline-flex items-center justify-center ${size==="small"? "w-6 h-6":"w-10 h-10"} overflow-hidden bg-neutral-tertiary rounded-full bg-slate-500`}>
      <span className={` ${size==="small" ? "text-xs":"text-md"} `} >
       {authorname?.split(" ")[0]?.[0]}
      {authorname?.split(" ")[1]?.[0]}
      </span>
    </div>
  </div>
}