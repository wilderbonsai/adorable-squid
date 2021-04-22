import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import {Layout} from '../components/index';
import HeaderAlt from '../components/HeaderAlt';
import Header from '../components/Header';
import {htmlToReact, markdownify} from '../utils';
import Footer from '../components/Footer';

export default class Post extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
              {(_.get(this.props, 'page.hide_header', null) === true) ? (
                <HeaderAlt {...this.props} />
              ) : 
                <Header {...this.props} site={this.props} page={this.props.page} image={_.get(this.props, 'page.content_img_path', null)} />
              }
              <div id="content" className="site-content">
                <main id="main" className="site-main inner">
                  <article className="post post-full">
                    <header className="post-header">
                      <h1 className="post-title">{_.get(this.props, 'page.title', null)}</h1>
                      <div className="post-meta">
                        Published on <time className="published"
                          dateTime={moment(_.get(this.props, 'page.date', null)).strftime('%Y-%m-%d %H:%M')}>{moment(_.get(this.props, 'page.date', null)).strftime('%B %d, %Y')}</time>
                      </div>
                    </header>
                    {_.get(this.props, 'page.subtitle', null) && (
                    <div className="post-subtitle">
                      {htmlToReact(_.get(this.props, 'page.subtitle', null))}
                    </div>
                    )}
                    <div className="post-content">
                      {markdownify(_.get(this.props, 'page.content', null))}
                    </div>
                  </article>
                </main>
                <Footer {...this.props} />
              </div>
            </Layout>
        );
    }
}
