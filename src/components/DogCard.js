export default function DogCard({name = 'No name',description = 'No description'}) {
  return(
    <div className="shadow-md rounded-[8px] p-[16px] flex flex-col gap-[8px]">
      <div className="text-[16px] font-bold">{name}</div>
      <div className="text-[12px] text-gray-500">{description}</div>
    </div>
  )
}