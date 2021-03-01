import { Component } from "react";
import Loader from "react-spinners/SyncLoader";

import SingleRepo from "./SingleRepo"

import "./LatestProjects.scss"

export default class LatestCommits extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true
        }
    }

    async componentDidMount() {
        const response = await (await fetch('https://api.github.com/users/jokurale/repos')).json()

        if(response.message) {
            this.setState( () => {
                return {isLoading: false, error: true}
            })
        }
        else {
            this.setState( () => {
                return {isLoading: false, data: response.filter(repo => repo.name !== "Jokurale")}
            })
        }      
    }

        render() {
            if (this.state.isLoading) {
                return (
                    <div className="LatestProjects">
                        <div className="LatestProjects__Loader"><Loader size={10} color={"#302533"}loading/></div> 
                    </div>
                )
            }

            if (this.state.data) {

                return <div className="LatestProjects">
                    {this.state.data.map( (repo, i) => {return (<SingleRepo key={i} repo={repo}/>) })}
                </div>

            }

            if (this.state.error) {
                return <div className="LatestProjects">
                    <div className="LatestProjects__Error">App could not retrive github repos <br/>:(</div>
                </div>
            }
        }
    }