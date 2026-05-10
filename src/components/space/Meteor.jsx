import { useMemo } from "react"

function Meteor(){
    const random =useMemo(() => {
        return Array.from({length:10}, (_,i) => {
            return {
                id : i,
                x: Math.random() * window.innerWidth,
                y: Math.random() * -100,
                delay: Math.random() *3,
                duration : Math.random() * 2 + 8
            }
        })
    }, [])
    return(
        <>
            {random.map(meteor=>(
                <rect key={meteor.id} x={meteor.x} y={meteor.y} fill="#38BDF8" width={2} height={3}
                style={{animationName:"Meteor", animationDuration:`${meteor.duration}s`,
                animationDelay:`${meteor.delay}s`, animationIterationCount:"infinite"
                }}></rect>
                ))}
        </>
    )
}
export default Meteor