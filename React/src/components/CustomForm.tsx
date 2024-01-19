import React, {useState} from "react";

type MyFormProps = {
    onSubmit: (form: { name: string, desc: string }) => void
}

const CustomForm: React.FC<MyFormProps> = ({onSubmit}) => {
        const [form, setForm] = useState({name: '', desc: ''});

        const {name, desc} = form;


    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setForm({...form, [name]: value});
    }

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(form);
        setForm({name:'', desc:''});
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={name} onChange={onChange}/>
            <input name="desc" value={desc} onChange={onChange}/>
            <button type="submit">등록</button>
        </form>
    );
};

export default CustomForm;