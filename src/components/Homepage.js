import './Homepage.css'
import Button from './button'

function Homepage() {
    return (
      <>
      <div className = 'w-screen h-screen grid grid-rows-2 text-white md: grid-cols-2'>
        <div className = 'tracking-wide centered font-mono font-bold w-full h-ful firstbox bg-black md:h-screen text-6xl'>
            <p> Reflect </p>
            <div>
            <Button className = 'bg-[#525962] hover:bg-[#2F2E2D]'>Click To Start</Button>
            </div>
        </div>

        <div className = 'tracking-wide centered font-mono font-bold w-full h-ful secondbox bg-black md:h-screen text-6xl'>
            <p> Create </p>
            <div>
            <Button className = 'bg-[#776354] hover:bg-[#84807F]'>Click To Start</Button>
            </div>
        </div>
        </div>
      </>
    );
  }
  
  export default Homepage;