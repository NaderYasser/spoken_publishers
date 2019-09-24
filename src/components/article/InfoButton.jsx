import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const InfoButton = (props) => {
    const { label, data } = props;

    return (
      <Styles>
        <span className="date">{data}</span>
        <button className="btn" type="button">{label}</button>
      </Styles>
    );
};


const Styles = styled.div`
    display:flex;
    align-items: center;
    justify-content:space-between;
    .btn{
        width:8rem ;
        height: 2rem ;
        background-color:#fff;
        border: 1px solid #61dad1;
        border-radius:6px;
        color:#61dad1;
        margin-left:0.5rem;
        cursor: pointer;
        
        
    }

    .date{
        font-size:0.6rem;
        color: #515d61;
    }

`;


export default InfoButton;


InfoButton.propTypes = {
    label: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
};
