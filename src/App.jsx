import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase/Firebase';
import { useSetRecoilState } from 'recoil';
import { state } from '../Store/Atoms';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Footer from '../Components/Footer';
import HomePage , {loader as HomeLoader} from '../Components/HomePage';
import SuperadminPortal from '../Components/SuperadminPortal';
import UploadPerformance from '../Components/UploadPerformance';
import Inhouse , {loader as DashboardLoader}from '../Components/Inhouse';
import Excel from '../Components/Excel';
import { Outlet } from 'react-router-dom';
import { isAdmin, isSuperAdmin } from '../Store/Getters';
import SuperNav from '../Components/SuperNav';
import AdminNav from '../Components/AdminNav';
import { useRecoilValue } from 'recoil';
import Nav from '../Components/Nav';
import Inside from '../Components/Inside';
import Outside from '../Components/Outside';
import Minor from '../Components/Minor';
import Major from '../Components/Major';
const router = createBrowserRouter(
  createRoutesFromElements(
 
    <Route element={<Layout />}>
    <Route path="/" element={<HomePage />} />
    <Route path="/inhouse" element={<Inhouse />}  />
    <Route path="/uploadperformance" element={<UploadPerformance />} />
    <Route path="/superadminportal" element={<SuperadminPortal />} />
    <Route path="/inside" element={<Inside />} />
    <Route path="/excelupload" element={<Excel />} />
    <Route path="/minorinternships" element={<Minor />} />
    <Route path="/majorinternships" element={<Major />} />
    <Route path="/outside" element={<Outside />} />
    
    
 
    </Route>
 
  )
);




function App() {

  const setState = useSetRecoilState(state);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, async(user) => {
      if (user) {
        
        const id = await auth.currentUser.getIdToken();
        setState({
          connected: user.displayName,
          id: id
        });
       
        
        
      } else {
    
        setState({
          connected: null,
          id: null
        });
      }
    });

  }, []);

  return (
    <div>
      
      <RouterProvider router={router} />
      <Footer />
    </div>
  )
}

export default App




function Layout(){
  const getAdmin=useRecoilValue(isAdmin);
  const getSuperAdmin = useRecoilValue(isSuperAdmin);
  return(
    <>
   {
        getSuperAdmin ? (
          <SuperNav />
        ) : getAdmin ? (
          <AdminNav />
        ) : (
          <Nav />
        )
      } 
      <Outlet />
    </>
  )
}