import {Song} from "./Song"

export const Songs = ({fn,allsongs})=>{
    console.log('*********All Songs',allsongs);
    //map(Js)
    //allsongs(data)-->convert-->JSX
    return (<>
         {allsongs.map((currentSong,index)=><Song fn={fn} key={index} song= {currentSong}/>)}
    </>)
}

