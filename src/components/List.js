import Skills from "./Skills";

function List(){
    return(
        <>
            <h1>Skills</h1>
            <ul>
                <Skills skills="HTML" details="HyperText Markup Language" />
                <Skills skills="CSS" details="Cascading Style Sheets" />
                <Skills skills="JavaScript" details="JavaScript is the Programming Language for the Web" />
                <Skills skills="React" details="A JavaScript library for building user interfaces" />
            </ul>
        </>
    )
}

export default List;