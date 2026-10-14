import { Appbar } from "../components/Appbar";
import { Fullblog } from "../components/Fullblog";
import { FullblogSkeleton} from "../components/skleton";
import { useblog } from "../hooks"
import { useParams } from "react-router-dom";

export function Blog(){
    const{ id }=useParams();
    const{loading,blog}=useblog({
        id:Number(id)
    });
    if(loading)
        {
            return <div>
                <Appbar/>
                <div className="flex justify-center">
                    <FullblogSkeleton/>
                </div>
                
            </div>
        }
    if (!blog) {
        return <div>Blog not found</div>;
    }
 
    return <div>
          <Fullblog blog={blog}/>
    </div>
}