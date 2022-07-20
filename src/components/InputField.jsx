const InputField = ({label, type, onChange, style, placeholder,name, value
})=>{
    return (
        <div className={style}>
            <div>{label}</div>
            <input type={type} onChange={(event)=>onChange(event.target.name,event.target.value)} placeholder={placeholder} name={name} value={value}/>
        </div>
    )
    

    ;
};

export default InputField;