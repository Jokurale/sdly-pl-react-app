import "./AboutmeCard.scss"

export default function AboutmeCard(props) {
    return (
        <div className="aboutme-card col-12">
            <img src={props.image} alt="About me card"/>
            <p>{props.children}</p>
        </div>
    )
}