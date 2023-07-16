import styled from "styled-components"

const StyledRegionCard = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #07182E;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    width: 70vw;
    margin: 1rem;
    padding: 1rem;

    section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 2rem;
    }

    .card__title {
        letter-spacing: 1px;
        text-transform: capitalize;
        margin: 1rem;
        font-size: 1.5rem;
        text-align: center;
        font-weight: 700;
        margin-bottom: 1rem;
        color: #118AB2;
    }

    .hero__left{
        display: inline;
        flex-basis: 50%;
        text-align: left;

        p {
            font-size: 1.2rem;
            color: #fff;
        }

        .confirm {
            color: #06D6A0;
        }

        .recovered {
            color: #118AB2;
        }

        .death {
            color: #EF476F;
        }
    }

    img {
        display: flex;
        flex-direction: column;
        width: 2.6rem;
        height: auto;
        border-radius: 5px;
        flex-basis: 50%;
        padding: 2rem;
    }

    /* Medium Screen */
    @media screen and (min-width: 768px) {
        width: 40vw;
    }

    /* Large Screen */
    @media screen and (min-width: 992px) {
        width: 24vw;
    }
`

export default StyledRegionCard