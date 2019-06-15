import React, { Component } from "react"
import CarouselModule from "./Carousel"
import { getMedia } from "../api"

export default class App extends Component {
  render() {
    getMedia()
    return <CarouselModule />
  }
}
