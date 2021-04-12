import React from 'react';

import CharacterCard from '../components/CharacterCard';
import logo from '../images/logoMorty.png';
import './styles/morty.css';

class morty extends React.Component {
    state={
        nextPage:1,
        loading : true,
        error:null,
        data: {
            results:[],
        },
    };
    
    componentDidMount(){
       this.fetchCharacters()  
    }
    fetchCharacters= async ()=>{
        this.setState({loading: true,error: null});
        try {
            const response= await fetch(`https://rickandmortyapi.com/api/character/?page=${this.state.nextPage}`);
            const data=await response.json();
            this.setState({
                loading:false,
                data: {
                    info: data.info,
                    results: [].concat(this.state.data.results, data.results)
                  },
                nextPage: this.state.nextPage +1,
            });    
        } catch (error) {
            this.setState({
                loading:false,
                error:error,
            });
            console.error(error);
        }
        
    }
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="App">
                        <img src={logo} alt="Rick & Morty" className="Logo"/>
                        <ul className="row">
                            {this.state.data.results.map(character => (
                                <li className="col-6 col-md-3" key={character.id}>
                                    <CharacterCard character={character}/>
                                </li>
                            ))}
                        </ul>
                        {this.state.loading && 
                            <p className="text-center">Cargando... </p>
                        }
                        {!this.state.loading && this.state.data.info.next && (
                            <button onClick={()=>this.fetchCharacters()}>Ver más</button>
                        )}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default morty;
