import React, { Component } from "react"
import CarouselModule from "./Carousel"

export default class App extends Component {
  getRandomIds = () => {
    var randomContentIds = []
    while (randomContentIds.length < 4) {
      var r = Math.floor(Math.random() * 4) + 1
      if (randomContentIds.indexOf(r) === -1) randomContentIds.push(r)
    }
    return randomContentIds
  }
  
  render() {
    return <CarouselModule randomIds={this.getRandomIds()} />
  }
}
