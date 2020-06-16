import React from "react";
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";
import KegDetail from"./KegDetail";
import EditKeg from "./EditKeg"

class KegControl extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            formVisibleOnPage: false,
            masterKegList: [],
            selectedKeg: null,
            editing: false,
            sell: false
        };
        this.handleClick = this.handleClick.bind(this);
       
    }
    handleClick = () => {
        if (this.state.selectedKeg != null) {
          this.setState({
            formVisibleOnPage: false,
            selectedKeg: null,
            editing: false,
          });
        } else {
          this.setState(prevState => ({
            formVisibleOnPage: !prevState.formVisibleOnPage,
          }));
        }
      }
    
    handleAddingNewKegToList = (newKeg) => {
       const newMasterKegList = this.state.masterKegList.concat(newKeg);
       this.setState({masterKegList: newMasterKegList,
                        formVisibleOnPage: false });
                        
    }

    handleChangingSelectedKeg = (id) => {
        const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
        this.setState({selectedKeg: selectedKeg});
    }   

    handleDeletingKeg = (id) => {
        const newMasterKegList = this.state.masterKegList.filter(keg => keg.id !== id);
        this.setState({
          masterKegList: newMasterKegList,
          selectedKeg: null
        })
      }

      handleEditClick = () => {
        this.setState({editing: true});
      }

      handleEditingKeg = (kegToEdit) => {
        const editedMasterKegList = this.state.masterKegList.filter(keg =>keg.id !== this.state.selectedKeg.id).concat(kegToEdit);
        this.state({
          masterKegList: editedMasterKegList,
          editing: false,
          selectedKeg: null
        })
      }

      handleSellingPint = (keg) => {
        this.setState({ pintsLeft: keg.pintsLeft - 1})
      }

    render() {
        let currentlyVisibleState = null;
        let buttonText = null;
    
        if (this.state.editing ) {      
          currentlyVisibleState = <EditKeg keg = {this.state.selectedKeg} onEditKeg = {this.handleEditingKeg} />
          buttonText = "Return to Keg List";
        }
        else if (this.state.sell) {
          currentlyVisibleState = <KegDetail keg={this.state.selectedKeg} sellPint = {this.sellPint} />
          buttonText = "Return to Keg List"
        }
        else if(this.state.selectedKeg != null) {
            currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg} onClickingEdit = {this.handleEditClick} onClickingDelete = {this.handleDeletingKeg}/>
            buttonText = "Return to Keg";
        }
        else if(this.state.selectedKeg != null) {
            currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg} />
            buttonText = "Return to Keg List";
        }
        else if(this.state.formVisibleOnPage) {
            currentlyVisibleState = <NewKegForm onNewKegCreation = {this.handleAddingNewKegToList}/>
            buttonText = "Return to Keg List";
        }
        else {
           currentlyVisibleState = <KegList kegList={this.state.masterKegList} onKegSelection={this.handleChangingSelectedKeg}/>
           buttonText = "Add keg";
            }
        return (
            <React.Fragment>
                {currentlyVisibleState}
                <button onClick={this.handleClick}>{buttonText}</button>
            </React.Fragment>
            );
        }
    }

    export default KegControl;