import  styled  from "styled-components";

const StyledRegion = styled.div`
    margin: 1rem auto;
    padding: 1rem auto;

    .global__title {
        text-align: center;
        margin-bottom: 2rem;
    }

    .title {
        font-size: 2.44rem;
        font-weight: 700;
        margin-bottom: 1rem;
        color: #118AB2;
    }

    .subtitle {
        font-size: 1.59rem;
        font-weight: 700;
        margin-bottom: 1rem;
        color: #06D6A0;
    }

    .region__container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    /* Medium Screen */
    @media screen and (min-width: 768px) {
        margin: 2rem auto;

        .region__container {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
        }
    }

    /* Large Screen */
    @media screen and (min-width: 992px) {
        /* We don't style here */
    }
`

export default StyledRegion