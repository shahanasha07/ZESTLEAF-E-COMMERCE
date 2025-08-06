import React from 'react'
import team1 from '../assets/james.jpg'
import team2 from '../assets/james.jpg'
import team3 from '../assets/james.jpg'

function Team() {
    const teams = [
        {img:team1, name:'Aarav Patel', proffetion:'Founder & CEO', discription:'Aarav’s vision for Zestleaf is to make healthy living easy and accessible for everyone.'},
        {img:team1, name:'Priya Sharma', proffetion:'Head of Nutrition', discription:'Priya ensures every juice is packed with the right nutrients and delicious flavors.'},
        {img:team1, name:'Rahul Verma', proffetion:'Operations Manager', discription:'Rahul makes sure your order is delivered fresh and on time, every time.'},
    ]
  return (
      <div className="my-16">
          <h2 className="text-4xl font-bold text-center text-[#74B816] mb-10">Meet Our Team</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {teams.map((person, index) =>(
                     <div className="bg-[#f6fdf2] rounded-lg shadow-md p-6 flex flex-col items-center w-full md:w-1/3">
              <img src={person.img} alt="Team member 1" className="w-24 h-24 rounded-full mb-4 object-cover" />
              <h3 className="text-xl font-semibold mb-1">{person.name} </h3>
              <p className="text-[#74B816] mb-2">{person.proffetion} </p>
              <p className="text-gray-600 text-center text-base">{person.discription} </p>
            </div>
            ))}
       
            
          </div>
        </div>
  )
}

export default Team