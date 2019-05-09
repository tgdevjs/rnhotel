import { configure, mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

// Make Enzyme functions available in all test files
global.shallow = shallow;
global.mount = mount;
