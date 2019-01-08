import React from 'react';
import '../../stylesheets/create_fups.css';

class CreateFup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.formFields.text,
      private: true,
      errors: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ errors: nextProps.errors })
  }

  handleSubmit(e) {
    e.preventDefault();
    let fup = {
      text: this.state.text,
      private: this.state.private
    };

    this.setState({ text: "", private: true});
    this.props.composeFup(fup);
  }

  update(field) {
    if (field === "private") {
      return e => {
        this.setState({
          [field]: !e.target.checked
        });
      };
    }
    return e =>
      this.setState({
        [field]: e.target.value
      });
  }

  renderErrors() {
    return (
      <ul className="session-errors">
        {Object.keys(this.state.errors).map(i => (
          <li key={`error-${i}`}>
            <span>X</span>
            {this.props.errors.text}
          </li>
        ))}
      </ul>
    );
  }
  
  render() {
    return (
      <>
        <div className="create-container">
          <form onSubmit={this.handleSubmit}>
            <div className="form-center">
              <div className="form-box">
                <textarea
                  className="text-field"
                  value={this.state.text}
                  onChange={this.update("text")}
                  placeholder="Fupped today? Tell us about it. We're here to help."
                >
                  {" "}
                </textarea>
                <div className="check-box-text">
                  <input
                    className="checkbox-margin"
                    type="checkbox"
                    checked={!this.state.private}
                    onChange={this.update("private")}
                  />
                  Publish post publicly
                  <div className="fup-error-container">
                    {this.renderErrors()}
                  </div>
                </div>
              </div>
              <input className="submit-btn" type="submit" value="Post" />
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default CreateFup;