

export default function Btn({
children,
border = "",
hover = "",
color = "",


}){
    
    return (
        
            <button className={`px-5 py-2 rounded-md ${border} ${hover} ${color} `} >{children}</button>
        
    )
}