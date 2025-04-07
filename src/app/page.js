import MenuBar from "@/components/MenuBar";
import DogCard from "@/components/DogCard";
export default async function Home() {

  const response = await fetch('https://dogapi.dog/api/v2/breeds')
  const resJSON = await response.json()

  const dogs = resJSON.data

  return (
    <div className="wrapper p-[16px]">

      {/* TOP BAR HEADER */}
      <header className="flex justify-between items-center mb-[16px]">
        <h1 className="text-[50px] font-bold">Your Task</h1>
        <img className="w-[24px] h-[24px]" src="/hamburger.png" />
      </header>

      <main className="flex flex-col gap-[16px]">
        <input type="text" placeholder="Search" className="p-[16px] pl-[24px] border-gray-500 border-[1px] rounded-[100px] w-[100%]" />



      {dogs.map(dog => (
        <DogCard name = {dog.attributes.name} description = {dog.attributes.description} key={dogs.name}/>
      
      ))}


        {/* <img className="db rounded-[24px] w-[100%]" src="/img1.png" />
        <img className="db rounded-[24px] w-[100%]" src="/img2.png" /> */}
      </main>



    </div>
  );
}