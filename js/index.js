var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var md = window.markdownit({ langPrefix: 'javascript' }).use(window.markdownitEmoji).use(window.markdownitTaskLists);
//This is to correct some feature if it doesn't work natively
//var check = "<input class='task-list-item-checkbox' checked disabled type='checkbox'>"
//var uncheck = "<input class='task-list-item-checkbox' disabled type='checkbox'>"
//var mark1 = "[x]"
//var mark2 = "[ ]"
//var mark3 = "--"
var inputText = "# Examples from Wikipedia ([link](https://en.wikipedia.org/wiki/Markdown))\n" + "---\n" + "\n" + "Heading\n" + "=======\n" + "\n" + "Sub-heading\n" + "-----------\n" + "\n" + "### Another deeper heading\n" + "\n" + "Paragraphs are separated\n" + "by a blank line.\n" + "\n" + "Leave 2 spaces at the end of a line to do a  \n" + "line break\n" + "\n" + "Text attributes *italic*, **bold**,\n" + "\`monospace\`, ~~strikethrough~~ .\n\n" + "Shopping list:\n" + "\n" + "* apples\n" + "* oranges\n" + "* pears\n" + "\n" + "Numbered list:\n" + "1. apples\n" + "2. oranges\n" + "3. pears\n" + "\n" + "The rain--not the reign--in\n" + "Spain.\n" + "\n" + "# Emoji\n" + "---\n" + "> Classic markup: :wink: :cry: :laughing: :yum:" + ":smile: :laughing: :blush: :smiley: :relaxed: :smirk: :heart_eyes: :kissing_heart:" + ":kissing_closed_eyes: :flushed: :relieved: :satisfied: :grin: :wink: :stuck_out_tongue_winking_eye:\n" + ">\n" + "> Shortcuts (emoticons): :-) :-( 8-) ;)\n" + "# More examples from github ([link](https://help.github.com/articles/basic-writing-and-formatting-syntax/))\n" + "---\n" + "#### Quoting code:\n" + "```javascript\n" + "function thisDoesSomething(toThis){\n" + "  toThis = something(toThis) \n" + "  return toThis\n" + "  } \n" + "```\n" + "#### Quoting text:\n" + "> Quoting is forbidden!\n\n" + "#### Nested lists:\n" + "1. First list item\n" + "   - First nested list item\n" + "     - Second nested list item\n\n" + "#### Task lists:\n" + "- [x] Finish my changes\n" + "- [ ] Push my commits to GitHub\n" + "- [ ] Open a pull request\n\n" + "*[Giuseppe Fragalà](https://freecodecamp.com/giuseppefragala)*";

var Htmlapp = function (_React$Component) {
  _inherits(Htmlapp, _React$Component);

  function Htmlapp(prop) {
    _classCallCheck(this, Htmlapp);

    var _this = _possibleConstructorReturn(this, (Htmlapp.__proto__ || Object.getPrototypeOf(Htmlapp)).call(this, prop));

    _this.state = { htmlText: inputText
      // binding in constructor
      //as recommended in the React docs
      //for “better performance in your application”
    };_this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(Htmlapp, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({ htmlText: event.target.value });
    }
  }, {
    key: "getText",
    value: function getText() {
      //return { __html: md.render(this.state.htmlText).replace(/\[[xX]\]/g,check).replace(/\[ \]/g, uncheck).replace(/--/g,"–")}
      return { __html: md.render(this.state.htmlText) };
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: "floating-box", id: "input" },
          React.createElement("textarea", { id: "textarea", rows: "60", cols: "10", onChange: this.handleChange, value: this.state.htmlText })
        ),
        React.createElement(
          "div",
          { className: "floating-box", id: "output", style: {} },
          React.createElement("div", { dangerouslySetInnerHTML: this.getText() })
        )
      );
    }
  }]);

  return Htmlapp;
}(React.Component);

ReactDOM.render(React.createElement(Htmlapp, null), document.getElementById('container'));