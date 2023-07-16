import styled from "styled-components"

const StyledGlobal = styled.div`
    margin: 1rem auto;
    padding: 1rem auto;

    .global {
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
    }

    h1 {
        font-size: 2.44rem;
        font-weight: 700;
        margin-bottom: 1rem;
        color: #118AB2;
    }

    h3 {
        font-size: 1.59rem;
        font-weight: 700;
        margin-bottom: 1rem;
        color: #06D6A0;
    }

    .card__container {
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        align-items: center;
    }

    /* Medium Screen */
    @media screen and (min-width: 768px) {

    }

    /* Large Screen */
    @media screen and (min-width: 992px) {
        /* We don't style here */
    }
`

export default StyledGlobal