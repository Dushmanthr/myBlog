import Img1 from "../assets/dummy.jpg"

const ProfilePosts = () => {
  return (
    <div className="w-full flex mt-8 space-x-4">
       {/*  left */}
       <div className="w-[35%] h-[200px] flex justify-center items-center">
        <img src={Img1}alt="" className="h-full w-full object-cover"/>
       </div>
      {/*  right */}
      <div className="flex flex-col w-[65%]">
        <h1 className="text-xl font-bold md:mb-2 mb:1 md:text-2xl">
           10 Uses of Artificial Intelligence in Day to Day Life 
        </h1>
        <div className= "flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
            <p>@donCreations</p>
            <div className="flex space-x-2">
                <p>20/03/2024</p>
                <p>16:45</p>
            </div>
        </div>
        <p className = "text-sm md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consequuntur labore quae perferendis quo culpa iusto distinctio porro! Quos dolor harum rem deserunt, ut facere quibusdam labore earum perferendis facilis minima natus molestias ad. Numquam a dicta accusantium cum voluptas, omnis exercitationem magnam sit earum natus ipsa unde quia tempora.</p>
      </div>
      
    </div>
  )
}

export default ProfilePosts
