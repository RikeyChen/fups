import React from 'react'
import '../../stylesheets/fups_item.css'

const FupsItem = (props) => (
  <div className="user-fups-container">
    <div>
      <p className="fup-text">
        {props.fup.text}
      </p>
    </div>
    <div className="upvote-arrow" />
  </div>
)

export default FupsItem;