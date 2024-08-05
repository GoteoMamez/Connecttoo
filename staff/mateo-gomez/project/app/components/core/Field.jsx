import Input from "./Input";
import Label from "./Label";

function Field({ id, type, placeholder, children }) {
    return <div className="Field">
        <Label className="Label" htmlFor={id}>{children}</Label>
        <Input className='Input' id={id} type={type} placeholder={placeholder} ></Input>
    </div>
}

export default Field
