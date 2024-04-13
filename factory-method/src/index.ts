interface Button {
  render: () => string;
}

class WindowsButton implements Button {
  render() {
    return "Windows Button";
  }
}

class WebButton implements Button {
  render() {
    return "Web Button";
  }
}

abstract class Dialog {
  abstract createButton(): Button;

  render() {
    const button = this.createButton();
    return button.render();
  }
}

class WindowsDialog extends Dialog {
  createButton() {
    return new WindowsButton();
  }
}

class WebDialog extends Dialog {
  createButton() {
    return new WebButton();
  }
}

export {
  Dialog,
  WindowsDialog,
  WebDialog
}
