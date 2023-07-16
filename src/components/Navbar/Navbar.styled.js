import styled from "styled-components"

const StyledNavbar = styled.div`
    /* Small Screen */
    background-color: #118AB2;
    padding: 1rem;
    color: #fff;

    nav {
        display: flex;
        flex-direction: column;
    }

    h1 {
        font-size: 2.4rem;
        margin: 1rem 1rem 1rem 0;
    }

    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        padding: 0 1rem 0 0;
    }

    li {
        margin-bottom: 1rem;
    }

    a {
        text-decoration: none;
        color: #fff;
        padding: 0.5rem;
        border-radius: 0.2rem;
        transition: background-color 0.3s ease;
    }

    a:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }

    /* Medium Screen */
    @media screen and (min-width: 768px) {
        nav {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }

        h1 {
            margin-bottom: 0;
        }

        ul {
            flex-direction: row;
        }

        li {
            margin: 0 1rem;
        }
    }

    /* Large Screen */
    @media screen and (min-width: 992px) {
        /* We don't style here */
    }

`

export default StyledNavbar