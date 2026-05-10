import Meteor from "./Meteor"
import Stars from "./Stars"

function SpaceBackground(){

    return(
        <div className="fixed -z-30 w-full h-full bg-space-deep">
            <svg width={"100%"} height={"100%"}>
            <Meteor/>
            <Stars/>
            </svg>
        </div>
    )
}
export default SpaceBackground