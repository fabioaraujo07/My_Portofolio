import styles from './Pessoa.module.css';

function Pessoa({nome, idade, cargo, foto}) {
    return (
    <div className={styles.pessoa}>
        <img src={foto} alt={nome} />
        <h2>Nome:{nome}</h2>
        <p>Idade:{idade} anos</p>
        <p>Profissão:{cargo}</p>
    </div>
    ) }

export default Pessoa;