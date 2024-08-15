
import {Navigate, Route,Routes} from "react-router-dom"
import Layout from "./layouts/layout"
import HomePage from "./pages/HomePage"
import AuthCallbackPage from "./pages/AuthCallbackPage"

// import MainNav from "./components/MainNav"


const AppRoutes = () => {
  return (
  <>
  <Routes>
    <Route path ="/" element={<Layout><HomePage /></Layout>
    }/>
    <Route path ="/auth-callback" element={< AuthCallbackPage /> }/>
    <Route path="/user-profile" element={<span>USER PROFILE PAGE</span>}/>
    {/* <Route path ="/MainNav" element={<MainNav />} /> */}
    <Route path="*" element={<Navigate  to= "/"/>}/>
  </Routes>
  </>
  )
}

export default AppRoutes