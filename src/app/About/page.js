import Image from 'next/image' ;

export default function About(){
    return(
        <div className="wrapper items-center">
            <p className="text-4xl bold m-4">It does not have anything in here</p>
            <Image src="/img1.png" alt="description" width={500} height={300} />
        </div>
    )
}