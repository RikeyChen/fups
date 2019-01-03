import React from 'react';

class CreateFup extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.formFields;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let fup = {
      text: this.state.text,
      private: this.state.private
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
              <input type="checkbox" value="true" onChange={this.update("private")}/>
              Publish post publicly
            </div>
            <input type="submit" value="Submit"/>
          </div>
        </form>
      </>
    )
  }
}

export default CreateFup;