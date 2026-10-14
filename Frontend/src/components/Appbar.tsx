import { Avatar } from "./Blogscard";
import { Link } from "react-router-dom";

export function Appbar() {
  return <div className="border border-b flex justify-between px-10 py-4">

    <Link  to={"/blogs"} className=" flex flex-col justify-center">
      Medium
    </Link>
    <div className="flex">
      <Link to={"/publish"}>
            <button type="button" className ="  mr-4 bg-green-700 text-white bg-success box-border border border-transparent hover:bg-success-strong focus:ring-4 focus:ring-success-medium shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none">New</button>
      </Link>
      
      <Avatar authorname="Anurag Gautam" size={"big"} />
    </div>
  </div>
}