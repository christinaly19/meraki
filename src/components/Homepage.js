import './Homepage.css'
import button from './button'
import Reflect from './reflect'
import { Routes, Route, useNavigate} from 'react-router-dom';
import Create from './create'

function Homepage() {
  const navigate = useNavigate();

  const navigateToReflect = () => {
    navigate('./reflect');
  };
  const navigateToCreate = () => {
    navigate('./create');
  };

    return (
      <>
      <div className = 'w-screen h-screen grid grid-rows-2 text-white md: grid-cols-2'>
        <div className = 'tracking-wide centered font-mono font-bold w-full h-ful firstbox bg-black md:h-screen text-6xl'>
            <p> Reflect </p>
            <div>
            <button onClick={navigateToReflect} className = 'text-2xl font-normal tracking-wider font-sans bg-[#525962] hover:bg-[#2F2E2D]'>  &nbsp; click to start &nbsp; </button>
            <Routes>
              <Route path="./reflect" element={<Reflect/>} />
        </Routes>
            </div>
        </div>

        <div className = 'tracking-wide centered font-mono font-bold w-full h-ful secondbox bg-black md:h-screen text-6xl'>
            <p> Create </p>
            <div>
            <button onClick={navigateToCreate} className ='text-2xl font-normal tracking-wider font-sans bg-[#917967] hover:bg-[#827A72]'>  &nbsp; click to start &nbsp;</button>
            <Routes>
              <Route path="./create" element={<Reflect/>} />
        </Routes>
            </div>
        </div>
        </div>
      </>
    );
  }
  
  export default Homepage;