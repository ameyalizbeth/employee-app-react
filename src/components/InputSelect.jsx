const InputSelect = (props)=>{

    const {label, values,onChange, name, value} = props;
    return (
        <div>
            <div>{label}</div>
            <select onChange={e=>onChange(e.target.name,e.target.value)} name={name} value={value}>
                <option value="">{`Choose ${label}`}</option>
            {
                values.map((element) => <option key={element.key} name={element.name}>{element.value}</option> )
            }
            
            </select>
        </div>
    )
    

    ;
};

export default InputSelect;