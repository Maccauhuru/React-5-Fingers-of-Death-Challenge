import PropTypes from 'prop-types';
import React from 'react';


class PropsValidation extends React.Component {
  render(){
return (
<React.Fragment>
<h1>Hello ,{this.props.name}</h1>
<h3>Array : {this.props.propArray}</h3>
<h3>Bool : {this.props.propBool? 'True Boolean Value Printed':'False Boolean Value Printed'}</h3>
<h3>Func : {this.props.propFunc('function successfully printed')}</h3>
<h3>Number : {this.props.propNumber}</h3>
<h3>String : {this.props.propString}</h3>
</React.Fragment>
);
  }
}
PropsValidation.PropTypes = {
name : PropTypes.string.isRequired,
propArray: PropTypes.array,
propBool : PropTypes.bool,
propFunc : PropTypes.func,
propNumber : PropTypes.number,
propString : PropTypes.string.isRequired
};


PropsValidation.defaultProps = {
name : 'S.L.Mupfukudzwa',
propArray : [5,12,15,20,38],
propBool : false,
propFunc : function(e){ return e},
propNumber : 45,
propString : "Dead man no tell no tales"
};

export default PropsValidation;