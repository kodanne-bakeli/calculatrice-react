//Varriables Globales
let resultat = document.getElementById('result')
let affichage = document.getElementById('affichage')
//class pour les différents buttons
class Buttons extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        const { value, onClick, className } = this.props
        return <input type="button" className={className}
            value={value} onClick={onClick} />
    }
}

// class pour calculer et du rendu final

class Calculateur extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            className: ""
        }
        this.afficher = this.afficher.bind(this)
        this.result = this.result.bind(this)
        this.clearAll = this.clearAll.bind(this)
        this.clear = this.clear.bind(this)
    }
    afficher(e) {
        this.state.className = "btn btn-light text-dark mx-1 my-2 shadow"
        affichage.value += e.target.value
    }
    result() {
        resultat.value = eval(affichage.value)
    }
    clearAll() {
        resultat.value = ""
        affichage.value = ""
    }
    clear() {
        resultat.value = ""
        affichage.value = affichage.value.slice(0, -1)

    }
    render() {

        return <div className="row">
            <div className="col ">
                <Buttons value="1" onClick={this.afficher} className="btn btn-light text-dark mx-1 my-2 shadow" />
                <Buttons value="2" onClick={this.afficher} className="btn btn-light text-dark mx-1 my-2 shadow" />
                <Buttons value="3" onClick={this.afficher} className="btn btn-light text-dark mx-1 my-2 shadow" />
                <Buttons value="4" onClick={this.afficher} className="btn btn-light text-dark mx-1 my-2 shadow" />
                <Buttons value="5" onClick={this.afficher} className="btn btn-light text-dark mx-1 my-2 shadow" />
                <Buttons value="6" onClick={this.afficher} className="btn btn-light text-dark mx-1 my-2 shadow" />
                <Buttons value="7" onClick={this.afficher} className="btn btn-light text-dark mx-1 my-2 shadow" />
                <Buttons value="8" onClick={this.afficher} className="btn btn-light text-dark mx-1 my-2 shadow" />
                <Buttons value="9" onClick={this.afficher} className="btn btn-light text-dark mx-1 my-2 shadow" />
                <Buttons value="0" onClick={this.afficher} className="btn btn-light text-dark mx-1 my-2 shadow" />
                <Buttons value="." onClick={this.afficher} className="btn btn-light text-dark mx-1 my-2 shadow " />
            </div>
            <div className="col">
                <Buttons value="+" onClick={this.afficher} className="btn btn-success text-dark mx-1 my-2 shadow" />
                <Buttons value="-" onClick={this.afficher} className="btn btn-warning text-dark mx-1 my-2 shadow" />
                <Buttons value="*" onClick={this.afficher} className="btn btn-info text-dark mx-1 my-2 shadow" />
                <Buttons value="/" onClick={this.afficher} className="btn btn-primary text-dark mx-1 my-2 shadow" />
                <Buttons value="=" onClick={this.result} className="btn btn-danger text-dark mx-1 my-2 shadow" />
                <Buttons value="C" onClick={this.clear} className="btn btn-black text-white border mx-1 my-2 shadow" />
                <Buttons value="CE" onClick={this.clearAll} className="btn btn-secondary text-white my-2 shadow w-100" />
            </div>

        </div>
    }
}

//affichage du rendu de la classe calculateur dans le navigateur 

ReactDOM.render(<Calculateur />
    , document.querySelector("#somme"))
