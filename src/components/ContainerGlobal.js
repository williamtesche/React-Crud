import global from "./global.css"



const ContainerGlobal = () => {
    return(
        <div class="conterGlobal">
            <div class="conter">
                <h1>Cadastro</h1>
                <input class="input" type="name" placeholder="Nome"/>
                <br/>
                <input class="input" ype="email" placeholder="E-mail"/>
                <br/>
                <input class="input" type="cpf" placeholder="CPF"/>
            </div>
        </div>
        )
}

export default ContainerGlobal;
 