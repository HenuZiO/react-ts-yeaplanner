type Props = {
    width: number
    height: number
}

export const Logo = (props: Props) => {
    const { width, height } = props
    
    return (
        <>
            <img src='/logos/rocket.svg' alt='YeaPlanner - Logo' width={width} height={height} />
        </>
    )
}