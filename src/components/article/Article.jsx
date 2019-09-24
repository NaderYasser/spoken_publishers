/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import writer from '../../assets/paper-and-feather.png';
import video from '../../assets/video-player.png';
import time from '../../assets/time.png';
import InfoButton from './InfoButton';
import Detail from './Detail';


const Article = (props) => {
    const {
        src,
        header,
        tags,
        publisher,
        publisherLogo,
        writerName,
        type,
        duration,
        pushDate,
        featureDate,
          } = props;
    return (
      <Styles>
        <div className="article">
          <img src={require(`../../assets/${src}`)} alt="article cover" className="article-cover" />
          <div className="header">
            <header className="article-name">{header}</header>
            <div className="article-tags">
              {tags.map(tag => (
                <span className="tag">
                  {' '}
                  {tag}
                  {' '}
                </span>
))}
            </div>
          </div>
          <div className="article-info">
            <Detail src={require(`../../assets/${publisherLogo}`)} title={publisher} />
            <Detail src={writer} title={writerName} />
            <Detail src={video} title={type} />
            <Detail src={time} title={duration} />
          </div>
        </div>
        <div className="article-btns">
          <InfoButton label="Push" data={`last pushed on 24/12/2019 ${pushDate}`} />
          <InfoButton label="Feature" data={`last pushed on 24/12/2019 ${featureDate}`} />
        </div>
      </Styles>
    );
};


const Styles = styled.div`
    width:90%;
    height:10rem;
    border-bottom:1px solid #e9f1f8;
    margin-bottom:1rem;
    box-sizing:border-box;
    .article{
        display: flex;
        height: 5rem;
        padding:0 1rem 1rem ;
        border-bottom:2px dashed #e9f1f8;
        
    }
    
    .article-cover{
        width:7rem;
        height:4rem ;
        margin-right:0.5rem;
        align-self:center;
        display:block;
    }
    .header{
        width:18rem;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        align-items:flex-start;
        box-sizing:border-box;
        padding:0.4rem 0.2rem;

    }
    .article-name{
        font-weight:600;
        font-size:0.9rem;
        text-align:left;
    }
    .article-tags{
        width:90%;
        display:flex;
        justify-content:space-between;

    }
    .tag{
        color: #2967bb;
        font-size:0.8rem;
        font-weight:400;
        letter-spacing: 1px;


    }
    .article-info{
        width: 16rem;
        height: 4rem;
        display:flex;
        align-self:flex-end;
        justify-self:flex-start;
        flex-wrap:wrap;
        justify-content:space-between;
        margin-left: auto;

    }
    .data{
        display:flex;
        width:48% ;
        align-items:center;

    }
    .info-icon{
        width:1rem ;
        height:1rem ;
        border-radius:1px;
        margin-right:0.2rem;
    }
    .info-title{
        font-size:0.7rem;
        color: #515d61;
    }
    .article-btns{
        display:flex;
        align-content:center;
        justify-content:space-between;
        width:90% ;
        margin-left:auto;
        height:4rem ;
    }
    @media (max-width: 768px){
      display: block;
      margin:0;
      padding:0;
      border:none
      .article{
        flex-direction:column;
        height: auto;
        margin:0;
        border:none
      }
      .article-btns{
        flex-direction:column;
      }
    }

`;
export default Article;

Article.propTypes = {
    src: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    tags: PropTypes.instanceOf(Array).isRequired,
    publisher: PropTypes.string.isRequired,
    publisherLogo: PropTypes.string.isRequired,
    writerName: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    pushDate: PropTypes.string.isRequired,
    featureDate: PropTypes.string.isRequired,
};
