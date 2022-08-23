import React, { Component } from "react"

class CatList extends Component {

  listOfCats = () => {
    return (
      this.props.catPics.map(c => <li><img key={c.id} src={c.url} alt={c.id} /></li>)
    )
  }
  
  render() {
    console.log(this.props.catPics)
    return (
      <div>
        <ol>
            {this.listOfCats()}
        </ol>
      </div>
    )
  }
}

export default CatList;