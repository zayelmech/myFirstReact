import React from 'react';
import {  Link } from "react-router-dom";
import './styles/Badges.css';
//import Navbar from '../components/Navbar';
import confLogo from '../images/badge-header.svg';
import BadgesList from '../components/BadgesList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import api from "../api";

class Badges extends React.Component {
   
    constructor(props){
        super(props);
        console.log('1 constructor');
        this.state ={
            data:[],
            loading:true,
            error:null,
        }
    }
    componentDidMount(){
        console.log('3  component');
        this.fetchData();
        /*
        this.timeOutId=setTimeout(() => {
            this.setState({
                loading:true,
                error:null,
                data:undefined,
            })
        }, 2000);
        */
    }
    componentDidUpdate(prevProps, prevState){
        console.log('5 componentDidUpdate');
        console.log({
            prevProps : prevProps, prevState: prevState
        })
        console.log({
            props:this.props, state:this.state,
        })
    }
    componentWillUnmount(){
        console.log('Component will unmount');
        //clearTimeout(this.timeOutId);
    }
    fetchData =async()=>{
        this.setState({
            loading:true,
            error:null,
        });
        try {
               const datos=await api.badges.list() ;
               this.setState({loading:false, data:datos});
        } catch (error) {
            this.setState({loading:false,error:error});
        }
    }

    render() {
        if(this.state.loading){
            console.log('2/4 render');
            return <PageLoading />;
        }
        if(this.state.error){
            
            return <PageError error={this.state.error} />;
        }
        return (
            <React.Fragment>
                
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={confLogo} alt="imagen"/>
                        </div>   
                    </div>   
                </div>
                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">
                            New Badge
                        </Link>
                    </div>
                    <div className="Badges__list">
                        <div className="Badges__container">
                              <BadgesList badges={this.state.data}/>                                    
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Badges
