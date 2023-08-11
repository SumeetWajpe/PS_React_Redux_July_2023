import renderer from "react-test-renderer";
import Counter from "../counter/counter";

it("renders correctly", () => {
  const tree = renderer.create(<Counter initialCount={100} />).toJSON();
  expect(tree).toMatchSnapshot();
});
