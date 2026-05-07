import Stars from "./Stars"

function SpaceBackground(){

    return(
        <div className="fixed -z-30 w-full h-full bg-space-deep">
            <Stars/>
        </div>
    )
}
export default SpaceBackground