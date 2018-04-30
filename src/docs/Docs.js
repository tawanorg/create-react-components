import React from 'react';
import Navigation from './Navigation';
import ComponentPage from './ComponentPage';
import componentData from './componentData';

export default class Docs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: window.location.hash.substr(1)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({route: window.location.hash.substr(1)})
    })
  }

  render() {
    const {route} = this.state;
    let components = componentData.filter(component => component && component.hasOwnProperty('examples'))
    const component = route ? components.filter( component => component.name === route)[0] : components[0];
    return (
      <React.Fragment>
        <Navigation components={components.map(component => component.name)} />
        <ComponentPage component={component} />
      </React.Fragment>
    )
  }
}
