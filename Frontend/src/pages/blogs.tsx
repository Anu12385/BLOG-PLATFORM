import { Blogscard } from "../components/Blogscard"
import { Appbar } from "../components/Appbar"
import { useBlogs } from "../hooks"
import { Skeleton } from "../components/skleton";


export function Blogs() {

    const { loading, blogs } = useBlogs();


  if (loading) {
        return <div>
            <Appbar />
            <div className="flex justify-center ">
                <div >
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </div>

            </div>

        </div>
    }
    return <div>
        <Appbar />
        <div className="flex justify-center">
            <div >
                {blogs.map((blog) => (
                    <Blogscard

                        id={blog.id}
                        authorname={blog.author.name || "Anonymous"}
                        content={blog.content}
                        date={"2nd Feb 2024"}
                        title={blog.title}
                        key={blog.id}
                    />
                ))}
            </div>
        </div>
    </div>

}