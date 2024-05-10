import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

import Img from "../assets/dummy.jpg"
import Comment from "../components/Comment";


const PostDetails = () => {
  return (
    <div>
        <Navbar/>
            <div className="px-8 md:px-[200px] mt-8">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl fomt-bold text-black md:text-3xl">10 Uses of Artificial Inteligence in day to day Life</h1>
                    <div className="flex items-center justify-center space-x-2">
                        <p><BiEdit /></p>
                        <p><MdDelete /></p>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-2 md:mt-4">
                <p>@donCreations</p>
                <div className="flex space-x-2">
                    <p>20/03/2024</p>
                    <p>16:45</p>
                </div>
                </div>
                <img src={Img} className="w-full mx-auto mt-8" alt="" />
                <p className="mx-auto mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eum optio sapiente dignissimos mollitia harum, dolor magni! Earum, a nihil debitis dolores ex sit, ipsam eligendi, dolor laboriosam accusamus quas error reiciendis. Asperiores, ducimus libero autem ipsam pariatur obcaecati aspernatur natus quas nemo unde quod sit porro, placeat harum! Rem tempora facere ad quasi! Eius nobis inventore molestias earum sed!</p>
                <div className="flex items-center mt-8 space-x-4 font-semibold">
                    <p>Categories:</p>
                    <div className="flex justify-center items-center space-x-2">
                        <div className="bg-gray-300 rounded-lg px-3 py-1">Tech</div>
                        <div className="bg-gray-300 rounded-lg px-3 py-1">AI</div>
                    </div>
                </div>
                <div className="flex flex-col mt-4">
                   <h3 className="mt-6 mb-4 font-semibold">Comments:</h3> 

                  <Comment/>
                  <Comment/>
                    <div className = "px-2 py-2 bg-gray-200 rounded-lg my-2">
                        <div className = "flex items-center justify-between">
                            <h3 className="font-bold text-gray-600 ">@donCreations</h3>
                            <div className="flex justify-center items-center space-x-4">
                                <p className="text-gray-500 text-sm">31/03/2024</p>
                                <p className="text-gray-500 text-sm">01:17</p>
                                <div className="flex items-center justify-center space-x-2">
                                    <p><BiEdit /></p>
                                    <p><MdDelete /></p>
                                </div>
                            </div>
                        </div>
                        <p className="px-4 mt-2">Nice Information</p>
                    </div>
                </div>
                {/* write a comment */}
                <div className="w-full flex flex-col mt-4 md:flex-row">
                    <input type="text" placeholder="Write a comment" className="md:w-[70%] outline-none py-2 px-4 mt-4 md:mt-0"/>
                    <button className="bg-black text-sm text-white px-2 py-2 md:w-[10%] mt-4 md:mt-0">Add Comment</button>
                </div>
            </div>
        <Footer/>
      
    </div>
  )
}

export default PostDetails
