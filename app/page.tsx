import React from 'react'
import Header from './components/header/header'
import Footer from './components/header/footer/footer'
const page = () => {
  return (
    <div>
    <Header></Header>
<br/>
    <section className="bg-yellow-300 text-black p-10 text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to My Website</h2>
        <p className="text-lg">I create amazing websites with Tailwind CSS</p>
        <img src='https://teachyourkidscode.com/wp-content/uploads/2022/02/best-coding-language-for-games.jpg' width={350} height={350} className='mx-auto mb-3 m-3 border-4 border-emerald-400 shadow-2xl'/>
</section>
    <section className='bg-white p-10 text-black'>
    <h1 className="text-3xl font-bold mb-6 ">My Services</h1>
    <img src="https://miro.medium.com/v2/resize:fit:1400/1*fHrAZJ1_L0Ff9dvVexL5_A.png" width={350} height={350} alt="Service 1" className="m-3 border-4 border-emerald-400 shadow-2xl mx-auto mb-4"/>
    <h3 className="text-xl font-bold">Serivce One</h3>
     <p className="mt-2 font-semibold">I make websites using nextJs, TypeScript/JavaScript, HTML, CSS/Tailwindcss And many more tools</p>
<br/> 
<p className='animate-bounce'>⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇</p>
<br/>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDlekm1ogv7qZMAJavBwGYS8YBPO1UzREiTg&s.png" width={350} height={350} alt="Service 2" className="m-3 border-4 border-emerald-400 shadow-2xl mx-auto mb-4"/>
    <h3 className="text-xl font-bold">Serivce Two</h3>
     <p className="mt-2 font-semibold">I do freelancing on UpWork, Guru, fiverr</p>
    </section>
    <br/>
    <Footer></Footer>
    </div>
  )
}

export default page
