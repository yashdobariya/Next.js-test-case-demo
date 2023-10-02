import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Home from "../../app/page";

test("Test :: Render home with title appropriate title", () => {
  const { getByText } = render(<Home />);
  expect(getByText("Docs")).toBeInTheDocument();
});
