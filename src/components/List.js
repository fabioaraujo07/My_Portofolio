import Skills from "./Skills";

function List(){
    return(
        <>
            <h1>Skills</h1>
            <ul>
                <Skills skills="Nmap" details="Network scanning tool for security auditing" />
                <Skills skills="Wireshark" details="Network protocol analyzer" />
                <Skills skills="Nessus" details="Vulnerability scanner" />
                <Skills skills="Java" details="General-purpose programming language" />
                <Skills skills="C" details="Low-level programming language" />
                <Skills skills="Python" details="High-level programming language" />
                <Skills skills="SQL" details="Database query language" />
                <Skills skills="Auditória Informática" details="Analysis of vulnerabilities and reporting" />
                <Skills skills="Programação Web" details="Web development skills" />
                <Skills skills="Políticas de Segurança" details="Security policies implementation" />
                <Skills skills="CSS" details="Cascading Style Sheets for web design" />
                <Skills skills="Kali Linux" details="Penetration testing operating system" />
                <Skills skills="Montagem de servidores" details="Database and web server setup" />
            </ul>
        </>
    )
}

export default List;
