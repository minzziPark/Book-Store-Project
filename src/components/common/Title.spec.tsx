import { render, screen } from "@testing-library/react";
import Title from "./Title";
import { BookStoreThemeProvider } from "../../context/themeContext";

describe("Title 컴포넌트 확인", () => {
  it("렌더를 확인", () => {
    // 1 렌더
    render(
      <BookStoreThemeProvider>
        <Title size="large">제목</Title>
      </BookStoreThemeProvider>
    );
    // 2 확인(화면상에, 문서상에 존재하는가)
    expect(screen.getByText("제목")).toBeInTheDocument();
  });

  it("size props 적용", () => {
    // 1. 렌더
    const { container } = render(
      <BookStoreThemeProvider>
        <Title size="large">제목</Title>
      </BookStoreThemeProvider>
    );
    // 2. 확인
    expect(container?.firstChild).toHaveStyle({ fontSize: "2rem" });
  });

  it("color props 적용", () => {
    const { container } = render(
      <BookStoreThemeProvider>
        <Title size="medium" color="secondary">
          제목
        </Title>
      </BookStoreThemeProvider>
    );
    expect(container?.firstChild).toHaveStyle({ color: "blue" });
  });
});
