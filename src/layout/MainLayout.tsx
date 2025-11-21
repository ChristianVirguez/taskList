
import"./mainlayout.css"


import { Header } from "../components/commun/header/Header"
import { Content } from "../components/commun/content/Content"
// import { Footer } from "../components/commun/footer/Footer"
import { Outlet } from "react-router";

function MainLayout () {
    return (
        <>
            <div className="main-layout">
                <Header/>
                <Content>
                    <Outlet/>
                </Content>
            </div>
        </>
    )
}

export{MainLayout}