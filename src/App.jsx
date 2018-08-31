import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from './web/components/carousel';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleList: [],
      scroll: {
        previousItem: null,
        nextItem: null
      }
    };
    
    this.scrollTo = this.scrollTo.bind(this);
  }
  createNewItem(newTitle) {
    newTitle.length > 0 ?
    this.setState({
      ...this.state.titleList.push({
        id: this.state.titleList.length, 
        title: newTitle
      })
    })
    : null;

      if (this.state.scroll.nextItem === null && this.state.titleList.length > 3) {
        this.setState({
          scroll : {
            previousItem: 1,
            nextItem: 3
          }
        })
      }
  }
  scrollTo(event, scrollDirection) {
    const itemAmount = this.state.titleList.length;
    // this.refs.item_4.scrollIntoView()
    if (scrollDirection === 'previous' && this.state.scroll.previousItem > 1) {
      this.setState({
        scroll : {
          previousItem: this.state.scroll.previousItem - 1,
          nextItem: this.state.scroll.nextItem - 1,
        }
      })
    }
    if (scrollDirection === 'next' && this.state.scroll.nextItem < itemAmount) {
      this.setState({
        scroll : {
          previousItem: this.state.scroll.previousItem + 1,
          nextItem: this.state.scroll.nextItem + 1
        }
      })
    }
  }
  render() {
    return (
      <Fragment>
        <div className='TitleInputContainer'>
          <input className='TitleInput' ref='titleInput' type='text' placeholder='Enter a title'/>
          <button id='titleInputSubmit' className='TitleInputSubmit' onClick={() => this.createNewItem(this.refs.titleInput.value)} >
            Add new slide
          </button>
        </div>
        <Carousel
        itemList={this.state.titleList}
        scrollTo={this.scrollTo}
        previousItem={this.state.scroll.previousItem}
        nextItem={this.state.scroll.nextItem}
        isPreviousScrollable={this.state.scroll.previousItem && (this.state.scroll.previousItem > 0)}
        isNextScrollable={this.state.scroll.nextItem && (this.state.scroll.nextItem <= this.state.titleList.length)}
        />
      </Fragment>
    );
  }
}

export default App;
