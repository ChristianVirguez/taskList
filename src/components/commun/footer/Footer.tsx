
import "./footer.css"

function Footer (){

    const date= new Date();
    const anio= date.getFullYear();

    return (
        <>
            <footer>
                <span>&copy;{anio} Christian Virgüéz. Todos los derechos reservados</span>
            </footer>
        </>
    )
}

export {Footer}