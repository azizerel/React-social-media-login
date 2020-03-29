import React                              from 'react';
import CardMedia                          from '@material-ui/core/CardMedia';

class LeftPanel extends React.Component {

  render() {
    return (
      <div className="leftPanel">
        <img src={require('./../img/dolar.png')} alt="Logo"/>

        <p className="boldFont">Lorem ipsum dolar sit  amet</p>
        <p >Lorem ipsum dolar sit  amet</p>
        <p >Lorem ipsum dolar sit  amet</p>
      </div>
    );
  }
}

export default LeftPanel;
