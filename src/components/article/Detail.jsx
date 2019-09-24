import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const Detail = (props) => {
    const { src, title } = props;
    return (
      <Styles>
        <img src={src} alt="" className="info-icon" />
        <span className="info-title">{title}</span>
      </Styles>
    );
};


const Styles = styled.div`

    display:flex;
    width:48% ;
    align-items:center;
    .info-icon{
        width:1rem ;
        height:1rem ;
        border-radius:1px;
        margin-right:0.3rem;
    }
    .info-title{
        font-size:0.8rem;
        color: #515d61;
    }
`;

export default Detail;


Detail.propTypes = {
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
