import Facebook from "./images/facebook.png"
import Twitter from "./images/twitter.png"
import Github  from "./images/github.png"
import Insta from "./images/instagram.png"


export default function Social(){
    return(
        <div className="Social">
            <a href="#"><img src={Github}></img></a>
            <a href="#"><img src={Twitter}></img></a>
            <a href="#"><img src={Facebook}></img></a>
            <a href="#"><img src={Insta}></img></a>
        </div>
    )
}