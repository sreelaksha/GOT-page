import styled from 'styled-components'

export default styled.div`
        border: 1px solid rgba(0, 0, 20, 0.1);
        border-radius: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
        padding: 10px;
        margin: 10px 0;
        background-color:#1a2f41;
        color:white;
        text-align: center;

        &:hover {
            box-shadow: 0px 0px 40px rgba(0,0,0,0.3);
            cursor: pointer;    
            background-color:#476172;
        }
`