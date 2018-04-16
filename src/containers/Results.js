import React from 'react';
import {connect} from 'react-redux'
import IndividualGif from '../components/IndividualGif'

class Results extends React.Component {

  render(){

    const individualGif = this.props.gifs[0] ? this.props.gifs[0].data.map((gif, i) => {
      return(<IndividualGif gif={gif} key={i} />)
    }) : null

    return (
      <div>
        {individualGif}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return(
    state: state
  )
}
export default connect(mapStateToProps)(Results);
