import React, { useEffect } from "react"
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, useLocation, BrowserRouter, Routes } from "react-router-dom"
import Layout from "./Layout"
import MyModel from "./componants/MyModel"
import Home from "./componants/Home"
import Cookies from "js-cookie"
import { useState } from "react"
import Login from "./componants/Login"
import Signup from "./componants/Signup"
import NotFound from "./componants/Notfound"
import Check from "./Auth/check"
import Nearbyusers from "./componants/nearbyusers"
import Profile from "./componants/profile"
import Search from "./componants/search"
import Postajob from "./componants/postajob"
import ForgotPwd from "./componants/ForgotPwd"
import ChangePwd from "./componants/ChangePwd"
import Register from "./componants/Register"
import SelectImage from "./componants/SelectImage"
import MultipleFileUploadForm from "./componants/MultipleFiles"

const App = () => {
    const [modell, setModell] = useState(false)
    
    useEffect(() => {
        if (!Cookies.get("token")) {
            setModell(false)
        }
        const isauth = async () => {
            const data = await fetch("http://localhost:5500/checkisvalid", {
                headers: {
                    Authorization: Cookies.get("token")
                }
            })
            const me = await data.json();
            if (me.unauthorized) {
                Cookies.remove("token");
            }
        }
        // isauth()
    }, [])

    return (
        <>
        {modell ?<MyModel setModell={setModell}></MyModel> : ""}
            <BrowserRouter>
                <Routes>
                    <Route path="login" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    <Route path="/selectimage" element={<SelectImage />}></Route>
                    <Route path="/multipleFiles" element={<MultipleFileUploadForm/>}></Route>
                    <Route path="/signup" element={<Signup />}></Route>
                    <Route path="/forgotpwd" element={<ForgotPwd />}></Route>
                    <Route path="/changepwd" element={<ChangePwd />}></Route>
                    {/* Layout after login  */}
                    <Route path="/" element={<Layout />}>
                        <Route path="/home" element={<Home setModell={setModell} />}></Route>
                        <Route path="/nearbyusers" element={<Nearbyusers />}></Route>
                        <Route path="/profile" element={<Profile />}></Route>
                        <Route path="/search" element={<Search />}></Route>
                        <Route path="/postanewjob" element={<Postajob />}></Route>
                        <Route path="*" element={<NotFound />}></Route>
                        <Route path={Cookies.get("token")} element={<Check />}> </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App