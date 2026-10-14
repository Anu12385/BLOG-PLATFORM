import { useState ,useEffect} from "react";
import axios from "axios";
import { BACKEND_URL } from "../backendconfig";

// this is the custom hook 

 export interface Blog{
    "content":string,
    "title":string,
    "id":number,
    "author":{
        "name":string
    }
}

export function useblog({id}:{id:number}){
     const [loading, setLoading]=useState(true);
     const [blog, setBlog]=useState<Blog>();

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
            headers:{
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }).then(
            response=>{
                setBlog(response.data.getts[0]);
                setLoading(false);
            }
        )
    },[])

    return {
        loading,
        blog
    }

}

export function useBlogs(){
    const [loading, setLoading]=useState(true);
    const [blogs, setBlogs]=useState<Blog[]>([]);

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
            headers:{
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }).then(
            response=>{
                setBlogs(response.data.store);
                setLoading(false);
            }
        )
    },[])

    return {
        loading,
        blogs
    }

}