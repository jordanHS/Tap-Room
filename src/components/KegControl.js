import React from "react";
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";
import Keg from "./Keg";
import KegDetail from"./KegDetail";

class KegControl extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            formVisibleOnPage: false,
            masterKegList: [],
            selectedKeg: null
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        if (this.state.selectedKeg != null) {
            this.setState({
                formVisibleOnPage: false,
                selectedKeg: null
            });
        } else {
            this.setState(prevState => ({
               formVisibleOnPage: !prevState 
            }))
        }
    }
    
    handleAddingNewKegToList = (newKeg) => {
       const newMasterKegList = this.state.masterKegList.concat(newKeg);
       this.setState({masterKegList: newMasterKegList,
                        formVisibleOnPage: false });
    }
}