import "./App.css"
import { UIProvider } from "@/context"
import { Dashboard, ForgotPassword, SignIn, SignUp } from "@/features"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { MiniProfileModal, Navbar, NotificationModal, Sidebar } from "@/components"
import { Services } from "./features/auth/services";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/reset-password" element={<ForgotPassword />} />

        <Route path="/app/*" element={<MainLayout />} />
      </Routes>
    </Router>
  )
}

function MainLayout() {
  return (
    <UIProvider>
      <div className="flex h-screen">
        <Sidebar />
        <div className="relative bg-mainBg flex-1 flex flex-col md:w-[calc(100%-16rem)] lg:w-[calc(100%-18rem)] md:ml-[16rem] lg:ml-[18rem]">
          <Navbar />
          <Routes>
            <Route path="/overview" element={<Dashboard />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </div>
      </div>
      <NotificationModal />
      <MiniProfileModal />
    </UIProvider>
  );
}

export default App
