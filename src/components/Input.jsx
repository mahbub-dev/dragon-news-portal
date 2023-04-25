/* eslint-disable react/prop-types */
const Input = ({ title, type, name, placeholder, value, onChange }) => {
    return (
        <>
            <label htmlFor={name} className="text-left mb-[15px] md:text-[20px] text-[17px] font-[600] text-[#403F3F]">{title}</label>
            <input onChange={onChange} type={type} name={name} required value={value} className="w-100 p-[20px] bg-[#F3F3F3] mb-[24px] rounded" placeholder={placeholder} />
        </>
    )
}

export default Input