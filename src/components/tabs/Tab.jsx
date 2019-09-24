/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    nItems: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  }

  render() {
    const {
      onClick,
      props: {
        activeTab,
        label,
        nItems,
        src,
      },
    } = this;
    let className = 'tab-list-item';

    if (activeTab === label) {
      className += ' tab-list-active';
    }
    console.log(activeTab);
    return (
      <Styles>
        <li
          className={className}
          onClick={onClick}
        >
          <img src={require(`../../assets/${src}`)} alt="logo" className="publisher-logo" />
          <div className="info">
            <header className="publisher-name">{label}</header>
            <span className="n-items">
              {nItems}
              {' '}
              items
            </span>
          </div>
        </li>

      </Styles>
    );
  }
}


const Styles = styled.div`
margin-right:-2px;
    .tab-list-item{
        width:100%;
        height:5rem ;
        display:flex;
        align-content:center;
        align-items:center;
        padding-left:1rem;
        box-sizing:border-box;
        cursor:pointer;

        
    }
    .tab-list-active{
        z-index:10;
        background-color: white;
        border: solid #e9f1f8;
        border-width: 2px 0 2px 2px ;
        border-radius:0.2rem 0  0 0.2rem;

    }
    .publisher-logo{
        width:2.5rem ;
        height:2.5rem ;
        margin-right:0.5rem;
        border-radius:0.2rem;
    }
    .info{
        display:flex;
        flex-direction:column;
    }
    .publisher-name{
        font-weight:600;
        font-size:1rem;
        letter-spacing: 1px;

    }
    .n-items{
        color: #515d61;
        font-size:0.8rem
    }
    @media (max-width: 768px){
      .info{
        display:none
      }
    }

`;

export default Tab;
