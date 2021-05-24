import * as ROUTES from "./routes"
import MillersImg from "../images/albums/millers-cave-single.jpg"
import MilwaukeeImg from "../images/albums/milwaukee-here-i-come-single-res.jpg"
import LLRImg from "../images/albums/long-line-riders-single.jpg"
import SteelGuitarRagImg from "../images/albums/steel-guitar-rag-single.jpeg"
import DrinkinImg from "../images/albums/dont-come-home-a-drinkin-single.jpeg"
import { Home, About, Listen, Shows, Contact, Milwaukee, SelfTitled, Millers, SteelGuitarRag, Drinkin } from "../pages"

export const routeArray = [
    {
      path: ROUTES.HOME,
      page: Home
    },
    {
      path: ROUTES.ABOUT,
      page: About
    },
    {
      path: ROUTES.LISTEN,
      page: Listen
    },
    {
      path: ROUTES.SHOWS,
      page: Shows
    },
    {
      path: ROUTES.CONTACT,
      page: Contact
    },
    {
      path: ROUTES.SELFTITLED,
      page: SelfTitled,
      contentClass: 'listen',
      title: "Long Line Riders S/T",
      img: LLRImg
    },
    {
      path: ROUTES.MILWAUKEE,
      page: Milwaukee,
      contentClass: 'listen',
      title: "Milwaukee, Here I Come",
      img: MilwaukeeImg
    },
    {
      path: ROUTES.MILLERS,
      page: Millers,
      contentClass: 'listen',
      title: "Miller's Cave",
      img: MillersImg
    },
    {
      path: ROUTES.STEELGUITARRAG,
      page: SteelGuitarRag,
      contentClass: 'listen',
      title: "Steel Guitar Rag",
      img: SteelGuitarRagImg
    },
    {
      path: ROUTES.DRINKIN,
      page: Drinkin,
      contentClass: 'listen',
      title: "Don't Come Home a Drinkin'",
      img: DrinkinImg   
    }
  ]

  export default routeArray