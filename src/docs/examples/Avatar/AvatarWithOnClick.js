import React from 'react';
import Avatar from 'components/Avatar';

/** Avatar with onclick */
export default class ExampleAvatar extends React.Component {
  render() {
    return (
      <Avatar
        name="Sam Simple"
        onClick={() => alert('Clicked')}
       />
    )
  }
}
