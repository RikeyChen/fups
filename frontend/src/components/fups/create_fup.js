import React from 'react';

class CreateFup extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.formFields;
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  hanelSubmit(e) {
    e.preventDefault();
    let fup = {
      text: this.state.text
    }

    this.props.composeFup(fup);
    this.setState({text: ''});
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="textarea" value={this.state.text} onChange={this.update("text")} placeholder="What happened today?"/>
            <div>
              <input type="checkbox" value="true" onChange={this.update()}/>
            </div>
            <input type="submit" value="Submit"/>
          </div>
        </form>
      </>
    )
  }
}

export default CreateFup;