import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Counter from "../counter/counter";

Enzyme.configure({ adapter: new Adapter() });

xdescribe("tests for Counter Component", () => {
  it("tests if component instance is defined", () => {
    let ctrInstance = shallow(<Counter />);
    expect(ctrInstance).toBeDefined();
  });
  xit("tests for initial value of state to be zero", () => {
    // A A A -> Arrange -> Act -> Assert

    // Arrange
    let ctrInstance = shallow(<Counter />);

    // Act
    let innerText = ctrInstance.find("p").text();

    // Assert
    expect(innerText).toEqual("Count : 0");
  });
  it("tests for initial value assigned to state", () => {
    // A A A -> Arrange -> Act -> Assert

    // Arrange
    let ctrInstance = shallow(<Counter initialState={10} />);

    // Act
    let innerText = ctrInstance.find("p").text();

    // Assert
    expect(innerText).toEqual("Count : 10");
  });
  it("tests for state value to increment", () => {
    // A A A -> Arrange -> Act -> Assert

    // Arrange
    let ctrInstance = shallow(<Counter initialState={10} />);

    let button = ctrInstance.find("button");

    // Act
    button.simulate("click"); // trigger the click event

    let innerText = ctrInstance.find("p").text();

    // Assert
    expect(innerText).toEqual("Count : 11");
  });
});
