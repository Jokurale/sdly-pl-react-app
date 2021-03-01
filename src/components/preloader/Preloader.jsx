import preloaderSvg from '../../svgs/preloader_logo3.svg'
import "./Preloader.scss"

export default function Preloader({forwardRef}) {
    return (
        <div ref={forwardRef} className="preloader">
            <img src={preloaderSvg} alt="Preloader" />
        </div>
    )
}