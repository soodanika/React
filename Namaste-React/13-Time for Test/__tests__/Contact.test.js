import { getAllByRole, render, screen } from "@testing-library/react";
import Contact from "../src/components/Contact";
import "@testing-library/jest-dom";


describe("Contact Page test cases", () => {

    //it or test same thing

    it("Should render Contact Us page", () => {
        render(<Contact />)

        const heading = screen.getByRole("heading");

        expect(heading).toBeInTheDocument();
    })


    it("Button on contact us page", () => {
        render(<Contact />)

        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    })


    it("Name input on contact us page", () => {
        render(<Contact />)

        const inputName = screen.getByPlaceholderText("Name");

        expect(inputName).toBeInTheDocument();
    })

    it("Should load two input boxes", () => {

        const inputBoxes = screen.getAllByRole("textbox");

        expect(inputBoxes.length).toBe(2)
    })

})

