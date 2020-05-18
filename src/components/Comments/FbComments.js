import React, { Component} from 'react';
import { FacebookProvider, Comments } from 'react-facebook';
 
export default class FbComments extends Component {
  render() {
    return (
      <FacebookProvider appId="1554317891392485">
        <Comments href="http://www.facebook.com" />
      </FacebookProvider>
    );
  }
}