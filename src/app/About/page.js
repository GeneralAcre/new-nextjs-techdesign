import Image from 'next/image' ;

export default function About(){
    return(
        <div className="wrapper items-center">
            <p className="text-4xl bold m-4">It doesn&apost have anything in here</p>
            <Image src="/public/img1.png" alt="Image1 "className="Image1"/>
        </div>
    )
}