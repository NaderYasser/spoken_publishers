import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Article from './Article';


class Articles extends Component {
    static propTypes = {
        activeTab: PropTypes.string.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
        };
    }

    componentDidMount() {
      axios.get('http://localhost:4000/articles')
      .then((res) => {
        const articles = res.data;
        this.setState({ articles });
        return null;
      })
      .catch((error) => {
        console.log(error);
      });
    }


    render() {
        const { activeTab } = this.props;
        const { articles } = this.state;
        return (
          <React.Fragment>
            {articles.map((article) => {
            if (article.publisher !== activeTab) return undefined;
              return (
                <React.Fragment>
                  <Article
                    src={article.cover}
                    key={article.key}
                    header={article.header}
                    tags={article.tags}
                    publisher={article.publisher}
                    publisherLogo={article.publisher_logo}
                    writerName={article.writer}
                    type={article.type}
                    duration={article.duration}
                    pushDate={article.push_date}
                    featureDate={article.feature_date}
                  />

                </React.Fragment>
                  );
            })}
          </React.Fragment>
        );
    }
}


export default Articles;
