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
        margin: 15px;
        font-size: 20px;
        text-align: center;
        font-weight: 700;
        margin-bottom: 15px;
        color: #118AB2;
    }

    .card__subtitle {
        line-height: 1.5;
        margin-bottom: 1.25rem;    
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 15px;
        color: #118AB2;
    }

    .hero__left{
        display: flex;
        flex-basis: 50%;
        text-align: left;
        display: inline;

        p {
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
        width: 40px;
        height: auto;
        border-radius: 5px;
        margin: 10px;
        display: flex;
        flex-basis: 50%;
        flex-direction: column;
        justify-content: right;
        padding: 15px;
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

export default StyledRegionCard