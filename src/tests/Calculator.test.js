import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Calculator from "../components/Calculator"

describe("Calculator", () => {
    test("verificar se os botões de operação básica existem", async () => {
        // configuração do simulador de user (antes de tudo)
        const user = userEvent.setup()

        render(<Calculator />)

        const plus = screen.getByText(/\+/i) 
        expect(plus).toBeInTheDocument()

        const minus = screen.getByText(/\-/i) 
        expect(minus).toBeInTheDocument()

        const asterisk = screen.getByText(/\*/i) 
        expect(asterisk).toBeInTheDocument()

        const slash = screen.getByText(/\//i) 
        expect(slash).toBeInTheDocument()
        
    })

    test("verificar se a multiplicação funciona", async () => {
        // configuração do simulador de user (antes de tudo)
        const user = userEvent.setup()

        render(<Calculator />)

        const cinco = screen.getByText(/5/i)
        await user.click(cinco)

        const asterisk = screen.getByText(/\*/i) 
        await user.click(asterisk)

        const dois = screen.getByText(/2/i)
        await user.click(dois)

        const equal = screen.getByText(/=/i)
        await user.click(equal)

        const value = screen.getByText("10")	        
	    expect(value).toBeInTheDocument()        
    })

    test("verificar se a soma funciona", async () => {
        // configuração do simulador de user (antes de tudo)
        const user = userEvent.setup()

        render(<Calculator />)

        const cinco = screen.getByText(/5/i)
        await user.click(cinco)

        const plus = screen.getByText(/\+/i) 
        await user.click(plus)


        const dois = screen.getByText(/6/i)
        await user.click(dois)

        const equal = screen.getByText(/=/i)
        await user.click(equal)

        const value = screen.getByText("11")	        
	    expect(value).toBeInTheDocument()        
    })

    test("verificar se a multiplicação está sendo feita antes da soma", async () => {
        // configuração do simulador de user (antes de tudo)
        const user = userEvent.setup()

        render(<Calculator />)

        const cinco = screen.getByText(/5/i)
        await user.click(cinco)

        const asterisk = screen.getByText(/\*/i) 
        await user.click(asterisk)

        const dois = screen.getByText(/2/i)
        await user.click(dois)

        const plus = screen.getByText(/\+/i) 
        await user.click(plus)

        const um = screen.getByText(/1/i)
        await user.click(um)

        const zaro = screen.getByText(/0/i)
        await user.click(zaro)

        const equal = screen.getByText(/=/i)
        await user.click(equal)

        const value = screen.getByText("20")	        
	    expect(value).toBeInTheDocument()        
    })
})