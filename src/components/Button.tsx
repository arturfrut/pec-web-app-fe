import { useContext } from "react";
import { CONTEXT } from "../context";

const Button = () => {
    const CTX: any = useContext(CONTEXT);

    let { data, setData } = CTX;

    const oneMore = () => setData((data += 1));

    return <button onClick={oneMore}>+1</button>;
};

export default Button;
