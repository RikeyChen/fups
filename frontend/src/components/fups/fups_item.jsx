import React from 'react'
import '../../stylesheets/fups_item.css'

const FupsItem = (props) => (
  <div className="fups-item-container">
    <p className="fup-text">
      {props.fup.text}
    </p>
    <div className="upvote-arrow" />
  </div>
)

export default FupsItem;