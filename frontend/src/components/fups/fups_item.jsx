import React from 'react'

const FupsItem = (props) => (
  <div className="fups-item-container">
    <p className="fup-text">
      {props.fup.text}
    </p>
  </div>
)

export default FupsItem;