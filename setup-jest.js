import { configure, mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MockDate from "mockdate";

configure({ adapter: new Adapter() });

// Make Enzyme functions available in all test files
global.shallow = shallow;
global.mount = mount;
global.mockdate = MockDate;

jest.mock("NativeModules", () => ({
  KeyboardObserver: {},
  PlatformConstants: {
    forceTouchAvailable: false
  },
  UIManager: {
    RCTView: () => {}
  },
  RNGestureHandlerModule: {
    attachGestureHandler: jest.fn(),
    createGestureHandler: jest.fn(),
    dropGestureHandler: jest.fn(),
    updateGestureHandler: jest.fn(),
    State: {},
    Directions: {}
  }
}));

jest.mock("cuid");
