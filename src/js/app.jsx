import React from 'react';
import LocalOne from './components/FolderOne';

export default class App extends React.Component {
  render() {
    return (
      <div >
        <div>
          <h1>React App</h1>
          <LocalOne />
        </div>
      </div>
    );
  }
}
