interface LogoProps {
    width: number
    height: number
}

const Logo = (props: LogoProps) => {
    const { width, height } = props
    
    return (
        <>
            <img src='/icons/rocket.svg' alt='YeaPlanner - Logo' width={width} height={height} />
        </>
    )
}

export default Logo