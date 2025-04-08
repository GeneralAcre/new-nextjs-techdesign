import Image from 'next/image' ;

export default function Contact(){
    return(
        <div className="wrapper">
            <p className="text-4xl bold m-4">Contact</p>
            <Image src="/img2.png" alt="description" width={500} height={300} />
        </div>
    )
}