

export const LayOut=( {children})=> {
    return (
     <div>
            <h2>Elije las vacunas para aplicar</h2>
        <div className="container mt-5 d-flex flex-column p-4">
            <h3>Haz click en tu vacuna </h3>
            { children }
        </div>
     </div>
    )

}