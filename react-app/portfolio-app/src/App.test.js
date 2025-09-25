import { render, screen } from "@testing-library/react";
import HomeContainer from "./Containers/HomeContainer";

test("renders learn react link", () => {
  render(<HomeContainer />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
