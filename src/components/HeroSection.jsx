function HeroSection(){
    return(
    <div className="text-center py-20 relative">
        <div className="absolute inset-0 -z-10" style={{
            background: 'radial-gradient(ellipse at center, #7C6FF720 0%, transparent 50%)'
        }}>
            </div>
            <div className="backdrop-blur-sm bg-space-deep/20 absolute inset-0 -z-10">

            </div>
        <h1 className="text-5xl font-bold text-accent-purple hover:scale-105 transition-transform duration-300"
        style={{animationName:"glow", animationIterationCount:"infinite", animationDuration:"2s"}}>
        igers 
        </h1>
        <p className="text-moon-gray mt-4">
        explore the movies
        </p>
        <button className="text-star-white text-sm mb-4 hover:bg-space-navy transition-colors
                    cursor-pointer rounded-full px-3 py-1">Explore Now</button>
    </div>
    )
}
export default HeroSection