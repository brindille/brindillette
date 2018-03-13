import Component from "brindille-component";
import "./footer.styl";

export default class Footer extends Component {
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
