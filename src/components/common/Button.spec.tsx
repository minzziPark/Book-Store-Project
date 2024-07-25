import { render, screen } from "@testing-library/react";
import Button from "./Button";
import { BookStoreThemeProvider } from "../../context/themeContext";

describe("Button 컴포넌트 확인", () => {
  it("렌더를 확인", () => {
    // 1 렌더
    render(
      <BookStoreThemeProvider>
        <Button size="large" scheme="primary">
          버튼
        </Button>
      </BookStoreThemeProvider>
    );
    // 2 확인(화면상에, 문서상에 존재하는가)
    expect(screen.getByText("버튼")).toBeInTheDocument();
  });

  it("size props 적용", () => {
    // 1. 렌더
    render(
      <BookStoreThemeProvider>
        <Button size="large" scheme="primary">
          버튼
        </Button>
      </BookStoreThemeProvider>
    );
    // 2. 확인
    expect(screen.getByRole("button")).toHaveStyle({ fontSize: "1.5rem" });
  });

  it("disabled 적용", () => {
    render(
      <BookStoreThemeProvider>
        <Button size="large" scheme="primary" disabled>
          버튼
        </Button>
      </BookStoreThemeProvider>
    );

    expect(screen.getByRole("button")).toHaveStyle({ cursor: "none" });
  });
});
