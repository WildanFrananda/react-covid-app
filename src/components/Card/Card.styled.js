import styled from "styled-components"

const StyledCard = styled.div`
        background: #07182E;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
        margin: 1rem;
        padding: 1rem;
        width: 70vw;
        border-radius: 20px;

    .status {
        z-index: 1;
        color: white;
        font-size: 1.4rem;
    }

    .value {
        font-size: 2rem;
        margin-top: auto;
    }

    /* Medium Screen */
    @media screen and (min-width: 768px) {
        /* We don't style here */
    }

    /* Large Screen */
    @media screen and (min-width: 992px) {
        /* We don't style here */
    }
`

export default StyledCard