import { Appbar } from "./Appbar"
import type { Blog } from "../hooks"
import { Avatar } from "./Blogscard"

export function Fullblog({ blog }: { blog: Blog }) {
    return <div>
        <Appbar />

        <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 pt-12 w-full max-w-4xl">

                <div className="col-span-8">
                    <div className="text-5xl font-extrabold">
                        {blog.title}
                    </div>

                    <div className="text-slate-500 pt-2">
                        Post on 2nd Feb 2023
                    </div>

                    <div className="pt-4">
                        {blog.content}
                    </div>
                </div>

                <div className="col-span-4">
                    <div className="text-slate-500 text-lg">
                        Author
                    </div>
                    
                    <div className="flex">
                        <div className="flex flex-col justify-center">
                             <Avatar size={"big"} authorname={blog.author.name || "Anonymous"} />
                        </div>
                        
                        <div className="pl-4">

                            <div className="text-xl font-bold" >
                                {blog.author.name||"Anonymous"}
                            </div>
                            <div className="text-slate-500 pt-2">
                                Catch phase to grab the attention
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>



}