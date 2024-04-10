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

interface Checkbox {
  render: () => string;
}

class WindowsCheckbox implements Checkbox {
  render() {
    return "Windows Checkbox";
  }
}

class WebCheckbox implements Checkbox {
  render() {
    return "Web Checkbox";
  }
}

interface GUIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}

class WindowsGUIFactory implements GUIFactory {
  createButton() {
      return new WindowsButton();
  }

  createCheckbox() {
    return new WindowsCheckbox();
  }
}

class WebGUIFactory implements GUIFactory {
  createButton() {
      return new WebButton();
  }

  createCheckbox() {
    return new WebCheckbox();
  }
}

export {
  GUIFactory,
  WindowsGUIFactory,
  WebGUIFactory
}