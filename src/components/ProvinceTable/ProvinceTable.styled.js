import styled from "styled-components"

const StyledProvinceTable = styled.div`
    margin: 1rem auto;
    padding: 1rem auto;

    .title {
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
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
        color: #06D6A0;
        margin-bottom: 15px;
    }

    .table__container {
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        align-items: center;
        overflow-y: hidden;
        width: 100%;
    }

    /* Medium Screen */
    @media screen and (min-width: 768px) {
        
    }

    /* Large Screen */
    @media screen and (min-width: 992px) {
        /* We don't style here */
    }
`

export default StyledProvinceTable