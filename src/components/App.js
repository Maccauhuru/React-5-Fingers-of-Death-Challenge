import React from 'react';
class ParentComponent extends React.Component {
render(){
return(<React.Fragment>
  <h1>{this.props.headerText}</h1>
  <h1>{this.props.headerText2}</h1>
  <BodyText />
  </React.Fragment>);
}
}

const BodyText =()=>

<div>
Every man who has lotted here over the centuries, has looked up to the light and imagined climbing to freedom.
So easy, so simple! And like shipwrecked men turning to seawater foregoing uncontrollable thirst,
many have died trying. And then here there can be no true despair without hope.
So as I terrorize Gotham, I will feed its people hope to poison their souls.
I will let them believe that they can survive so that you can watch them climbing over each other to stay in the sun.
You can watch me torture an entire city.
And then when you’ve truly understood the depth of your failure, we will fulfill Ra’s Al Ghul’s destiny.
We will destroy Gotham. And then, when that is done, and Gotham is… ashes Then you have my permission to die.
</div>

export default ParentComponent;