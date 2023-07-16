import styled from "styled-components"

const StyledHero = styled.div`
    /* Small Screen */
    margin: 1rem;

    section {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    .hero__left {
        margin-bottom: 1.5rem;
    }

    .hero__right {
        justify-content: center;
    }

    h1 {
        color: #118AB2;
        margin-bottom: 1rem;
        font-size: 2.44rem;
    }

    h3 {
        color: #06D6A0;
        margin-bottom: 1rem;
        font-size: 1.59rem;
    }

    p {
        color: #fff;
        margin-bottom: 2rem;
    }

    img {
        max-width: 100%;
        height: auto;
        border-radius: 25px;
    }

    button {
        background-color: #118AB2;
        color: #fff;
        font-size: 1.2rem;
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 0.3rem;
        cursor: pointer;
    }

    /* Medium Screen */
    @media screen and (min-width: 768px) {
    /*
        * Nothing TODO Here.
        * We dont change style Hero. 
        */
    }

    /* Large Screen */
    @media screen and (min-width: 992px) {
        max-width: 1200px;
        margin: 3rem auto;

        section {
            margin: 0 1rem;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            text-align: left;
        }

        .hero__left {
            flex-basis: 40%;
        }
    }
`

export default StyledHero