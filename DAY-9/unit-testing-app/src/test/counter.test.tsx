import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Counter from "../counter/counter";

Enzyme.configure({ adapter: new Adapter() });

describe("tests for Counter Component", () => {
  it("tests if component instance is defined", () => {
    let ctrInstance = shallow(<Counter />);
    expect(ctrInstance).toBeDefined();
  });
  it("tests for initial value of state to be zero", () => {
    // A A A -> Arrange -> Act -> Assert

    // Arrange
    let ctrInstance = shallow(<Counter />);

    // Act
    let innerText = ctrInstance.find("p").text();

    // Assert
    expect(innerText).toEqual("Count : 0");
  });
});
