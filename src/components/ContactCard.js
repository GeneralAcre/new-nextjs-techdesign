export default function ContactCard({ name, description, imageUrl = "/img1.png" }) {
    return (
      <div className="shadow-md rounded-[8px] p-[16px] flex items-center gap-[8px]">
        <img src={imageUrl} className="w-[48px] h-[48px] rounded-[100px]" />
        <div>
          <h2 className="text-[16px] font-bold">{name}</h2>
          <p className="text-[12px] text-gray-500">{description}</p>
        </div>
      </div>
    )
  }