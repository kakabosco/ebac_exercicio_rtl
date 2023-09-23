import { fireEvent, render, screen } from "@testing-library/react";
import Post from ".";

describe("Teste para o componente Post", () => {
    it("Deve renderizar o componente corretamente", () => {
        render(<Post />);
        expect(screen.getByText("Comentar")).toBeInTheDocument();
    });

    it("Deve inserir dois comentários", () => {
        render(<Post />);

        const textarea = screen.getByTestId("post-comment-textarea");
        fireEvent.change(textarea, {
            target: { value: "Primeiro comentário via teste" },
        });
        const submitButton = screen.getByTestId("post-comment-submit");
        fireEvent.click(submitButton);
        expect(
            screen.getByText("Primeiro comentário via teste")
        ).toBeInTheDocument();

        fireEvent.change(textarea, {
            target: { value: "Segundo comentário via teste" },
        });
        fireEvent.click(submitButton);
        expect(
            screen.getByText("Segundo comentário via teste")
        ).toBeInTheDocument();
    });
});
