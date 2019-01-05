import React from 'react';
import '../../stylesheets/create_fups.css';

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
    return <>
        <div className="create-container">
          <form onSubmit={this.handleSubmit}>
            <div className="form-center">
              <div className="form-box">
              <textarea className="text-field" value={this.state.text} onChange={this.update("text")} placeholder="Fupped today? Tell us about it. We're here to help."> </textarea>
                <div className="check-box-text">
                  <input type="checkbox" value="false" onChange={this.update("private")} />
                  Publish post publicly
                </div>
              </div>
              <input className="submit-btn" type="submit" value="Post" />
            </div>
          </form>
        </div>
      </>;
  }
}

export default CreateFup;