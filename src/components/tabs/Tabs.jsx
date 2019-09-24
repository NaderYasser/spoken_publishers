/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styled from 'styled-components';
import Tab from './Tab';
import Articles from '../article/Articles';


class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
      publishers: [],

    };
  }


  componentDidMount() {
    axios.get('http://localhost:4000/publishers')
    .then((res) => {
      const publishers = res.data;
      this.setState({ publishers });
      return null;
    })
    .catch((error) => {
      console.log(error);
    });
  }

  onClickTabItem = (tab) => {
      this.setState({ activeTab: tab });
      console.log(this.state.activeTab);
  }


  render() {
    const {
      onClickTabItem,
      state: {
        activeTab,
        publishers,
      },
    } = this;

    return (
      <Styles>
        <div className="tabs">
          <ul className="tab-list">

            {publishers.map(publisher => (
              <Tab
                activeTab={activeTab}
                key={publisher.name}
                label={publisher.name}
                nItems={publisher.items}
                onClick={onClickTabItem}
                src={publisher.logo}
              />
              ))}

          </ul>
          <div className="tab-content">
            <Articles activeTab={activeTab} />
          </div>
        </div>
      </Styles>
    );
  }
}


const Styles = styled.div`
    .tabs{
        display:flex;
        width:100%;
        height:30rem ;
    }
    .tab-list{
        width:25%;
        height: 100%;
        margin:0;
        padding:0;
        list-style:none;
    }
    .tab-content{
        width:65%;
        border: 2px solid #e9f1f8;
        border-radius:0 0.2rem 0.2rem ;
        text-align:center;
        z-index:-1;
        display:flex;
        flex-direction:column;
        align-items:center;
        padding-top:1rem;
        height: inherit;
        overflow: auto
    }


`;
export default Tabs;
