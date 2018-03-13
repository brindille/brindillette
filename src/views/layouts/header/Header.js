import Component from "brindille-component";
import "./header.styl";

export default class Header extends Component {
  constructor($el) {
    super($el);

    // Method bindings

    // Dom nodes registering

    // Event listeners
    this.addEvents();
  }

  addEvents() {}

  removeEvents() {}

  dispose() {
    this.removeEvents();
    super.dispose();
  }
}
