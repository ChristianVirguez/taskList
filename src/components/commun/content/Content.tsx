import "./content.css"

type propContent = {
    children?:React.ReactNode
}


function Content ({children}:propContent) {
    return (
        <>
            <main className="content-main">
                {children}
            </main>
        </>
    )
}

export {Content}