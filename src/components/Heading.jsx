

function H1({children, serif}){
    return <h1 className={`text-white text-6xl font-bold ${serif}`}>{children}</h1>

} 

function H2({children,serif}){
    return <h1 className={`text-white text-5xl font-bold ${serif}`}>{children}</h1>

} 

function H3({children, serif}){
    return <h3 className={`text-white text-5xl font-bold ${serif}`}>{children}</h3>

} 
function H4({children, serif}){
    return <h3 className={`text-white text-3xl font-bold ${serif}`}>{children}</h3>

} 


function H5({children, serif}){
    return <h1 className={`text-white text-2xl font-bold ${serif}`}>{children}</h1>

} 

function H6({children, serif}){
    return <h1 className={`text-white text-xl font-bold ${serif}`}>{children}</h1>

} 

export{ H1, H2, H3, H4, H5, H6 };