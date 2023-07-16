import StyledCard from "./Card.styled"

function Card(props) {
    const { status, total, color } = props
    return (
        <StyledCard>
                <h3 className="status">{status.charAt(0).toUpperCase() + status.slice(1)}</h3>
                <h3 className="value" style={{ color: color }}>{total.toLocaleString("id-ID")}</h3>
        </StyledCard>
    )
}

export default Card