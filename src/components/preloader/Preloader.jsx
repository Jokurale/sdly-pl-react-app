import preloaderSvg from '../../svgs/preloader_logo.svg'
import "./Preloader.scss"

export default function Preloader({forwardRef}) {
    return (
        <div ref={forwardRef} className="Preloader">
            <img src={preloaderSvg} alt="Preloader" />
        </div>
    )
}