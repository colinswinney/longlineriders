import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/mdowgraw"
        method="POST"
        className="form"
      >
        <div className="form--group name">
            <label for="name">Name</label>
            <input
                id="name"
                type="text"
                placeholder="William Ray Cyrus, Esq"
                name="name"
            />
        </div>
        <div className="form--group email">
            <label for="email">Email</label>
            <input
                id="email"
                type="email"
                placeholder="billyray61@aol.com"
                name="email"
            />
        </div>
        <div className="form--group message">
            <label for="message">Message</label>
            <textarea
                id="message"
                type="textarea"
                placeholder="Don't break our hearts..."
                name="message"
            />
        </div>
        {status === "SUCCESS" ? <div class="success"><p>Thank You, we'll be in touch!</p></div> : <div className="form--group"><button className="submit">Submit</button></div>}
        {status === "ERROR" && <div class="error"><p>Ooops! There was an error.</p></div>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
// import React, { Component } from "react";

// export default class FormSpree extends Component {
//     constructor(props) {
//         super(props);
//         this.submitForm = this.submitForm.bind(this);
//         this.state = {
//             status: ""
//         };
//     }

//     render() {

//         const { status } = this.state;
        
//         return (
//             <form
//                 onSubmit={this.submitForm}
//                 action="https://formspree.io/mdowgraw"
//                 method="POST"
//                 className="form"
//             >   
//             <div className="form--group name">
//                 <label for="name">Name</label>
//                 <input
//                     id="name"
//                     type="text"
//                     placeholder="William Ray Cyrus, Esq"
//                 />
//             </div>
//             <div className="form--group email">
//                 <label for="email">Email</label>
//                 <input
//                     id="email"
//                     type="email"
//                     placeholder="billyray61@aol.com"
//                 />
//             </div>
//             <div className="form--group message">
//                 <label for="message">Message</label>
//                 <textarea
//                     id="message"
//                     type="textarea"
//                     placeholder="Don't break our hearts..."
//                 />
//             </div>
//             {status === "SUCCESS" ? <p>Thanks!</p> : <button className="submit">Submit</button>}
//             {status === "ERROR" && <div class="error"><p>Ooops! There was an error.</p></div>}
//             </form>
//         );
//     }

//   submitForm(ev) {
//     ev.preventDefault();
//     const form = ev.target;
//     const data = new FormData(form);
//     const xhr = new XMLHttpRequest();
//     xhr.open(form.method, form.action);
//     xhr.setRequestHeader("Accept", "application/json");
//     xhr.onreadystatechange = () => {
//       if (xhr.readyState !== XMLHttpRequest.DONE) return;
//       if (xhr.status === 200) {
//         form.reset();
//         this.setState({ status: "SUCCESS" });
//       } else {
//         this.setState({ status: "ERROR" });
//       }
//     };
//     xhr.send(data);
//   }
// }