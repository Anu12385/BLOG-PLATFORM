import axios from "axios"
import { Appbar } from "../components/Appbar"
import { BACKEND_URL } from "../backendconfig"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function Publish() {

    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");
    const navigate = useNavigate();

    return <div>
        <Appbar />
        <div className=" flex justify-center w-full">

            <div className=" w-full max-w-lg pt-4">
                <input onChange={(e) => {
                    settitle(e.target.value)
                }} type="text" id="input-group-1" className="block w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" placeholder="Title" />
                
                    <div className=" mt-2 w-full mb-4 border border-default-medium rounded-base bg-neutral-secondary-medium shadow-xs">

                        <div className="px-4 py-2 bg-neutral-secondary-medium rounded-b-base">
                            <textarea  onChange={(e) => {
                                e.preventDefault();
                                setdescription(e.currentTarget.value)
                            }} id="editor" className="block w-full px-0 text-sm text-heading bg-neutral-secondary-medium border-0 focus:ring-0 placeholder:text-body" placeholder="Write an article..." required ></textarea>
                        </div>
                    </div>
                    <button   onClick={async () => {
                        console.log("1. BUTTON CLICKED");

                        try {
                            const response = await axios.post(
                                `${BACKEND_URL}/api/v1/blog/g`,
                                {
                                    title,
                                    content: description
                                },
                                {
                                    headers: {
                                        Authorization: `Bearer ${localStorage.getItem("token")}`
                                    }
                                }
                            );

                            console.log("2. AXIOS RESPONSE");
                            console.log(response);
                            console.log("3. ID =", response.data.id);

                            navigate(`/blog/${response.data.id}`);

                            console.log("4. NAVIGATE CALLED");

                        } catch (error) {
                            console.log("AXIOS ERROR =", error);
                        }
                    }} type="submit" className=" bg-green-700 text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Publish post</button>
            </div>



        </div>
    </div>
}