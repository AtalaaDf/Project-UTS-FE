import { useMemo } from "react"
import '../../index.css'

function Stars(){
    const random = useMemo(() => {
    return Array.from({length:50}, (_,i) =>{
            return {
                id: i,
                x : Math.random() * window.innerWidth,               
                y : Math.random() * window.innerHeight,             
                r : Math.random() * 2 + 1,  
                delay : Math.random() * 3      
            }
        })
    }, [])

    return(
        <svg className="w-full h-screen" width={"100%"} height={"100%"} >
            {random.map(star=>(
                <rect key={star.id} x={star.x} y={star.y} fill="white" width={2} height={3}
                style={{animationName:"twinkle", animationDuration:"2s",
                    animationDelay:`${star.delay}s`, animationIterationCount:"infinite"
                }}></rect>
                ))}
        </svg>
    )
}

export default Stars