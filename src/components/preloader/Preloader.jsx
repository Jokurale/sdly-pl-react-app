import preloader_svg from '../../svgs/preloader_logo3.svg'

export default function Preloader(props) {
    return (
        <div ref={props.forwardRef} className="preloader">
            <img src={preloader_svg} alt="Preloader" />
        </div>
    )
}