document.addEventListener("readystatechange", () => {
  const head = document.head;
  const body = document.body;

  const select = document.createElement("select");
  const message = document.createElement("div");
  select.id = "snippets";
  message.id = "message";

  select.innerHTML = `
    <option value="0" selected="true" disabled="disabled">Code snippets to cliboard</option>
    <option value="js">Javascript block</option>
    <option value="css">Style Block</option>
    <option value="section">Section Tag</option>
    <option value="widget/blog">Blog widget</option>
    <option value="widget/header">Header Widget</option>
    <option value="widget/menu">Menu Widget</option>
    <option value="widget/html">HTML Widget</option>
    <option value="widget/labels">Labels Widget</option>
    `;
  body.appendChild(select);
  body.appendChild(message);

  // Copy to clipboard snippets
  document.getElementById("snippets").onchange = function () {
    let text = this.value;
    var textarea = document.createElement("textarea");

    let code;
    snippets.map((sn) => {
      text === sn.name ? (code = sn.body) : null;
    });

    textarea.value = code;
    document.body.appendChild(textarea);
    textarea.select();
    var result = document.execCommand("copy");

    message.innerHTML = `<span>${this.value}</span> snippet has been copied to clipboard`;
    message.style.bottom = "50px";

    setTimeout(() => {
      message.style.bottom = "-50px";
    }, 3000);

    document.body.removeChild(textarea);
    this.value = 0;

    return result;
  };

  const style = document.createElement("style");
  style.type = "text/css";

  style.innerHTML = `
     #snippets {
      position: fixed;
      top: 15px;
      right: 50%;
      margin-right: -135px;
      z-index: 999;
      border: 1px solid #aaa;
      padding: 10px;
      box-sizing: border-box;
      color: #555;
      border-radius: 3px;
      width: 270px;
      cursor: pointer;
      font-size: 14px;
      font-family: sans-serif;
      font-weight: 700;
      line-height: 1.3;
      padding: .6em 1.4em .5em .8em;
      box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
      border-radius: .5em;
      -moz-appearance: none;
      -webkit-appearance: none;
      appearance: none;
      background-color: #EEE;
      background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
        linear-gradient(to bottom, #FFF 0%,#EEE 100%);
      background-repeat: no-repeat, repeat;
      background-position: right .7em top 50%, 0 0;
      background-size: .65em auto, 100%;
     }
     #snippets:hover {

    }
    #snippets:focus {
      box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
      box-shadow: 0 0 0 3px -moz-mac-focusring;
      outline: none;
    }
    #snippets option {
      font-weight:normal;
    }
    #snippets:disabled:hover {

    }

    div#message {
      position: fixed;
      z-index: 999;
      bottom: -50px;
      width: 500px;
      background: #38c;
      color: #FFF;
      height: 50px;
      line-height: 50px;
      text-align: center;
      left: 50%;
      margin-left: -250px;
      border-radius: 50px;
      transition: bottom .5s;
  }
  #message span {
    color: yellow;
    font-weight: bold;
  }
  `;

  head.appendChild(style);
});