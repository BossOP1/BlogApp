import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import authService from './appwrite/auth';
import { Footer, Header } from './components';
import { login, logout } from './store/authSlice';

function App() {

const [loading,setLoading] = useState(true);
const dispatch = useDispatch();


useEffect(() => {
authService.getCurrentUser()
.then((userData)=>{
  if(userData){
    dispatch(login({userData}))
  }
  else{
    dispatch(logout())
  }
})
.finally(()=>{setLoading(false)})



  
}, [])

return !loading ? (
<div className='min-h-[100vh] w-[100vw] flex justify-center flex-wrap bg-gray-400 p-10'>
<div className='w-full h-full text-center block'>
  <Header/>
  <main>
  TODO:  {/* <Outlet/> */}
  </main>
  <Footer/>

</div>
</div>
) : null


}

export default App;
