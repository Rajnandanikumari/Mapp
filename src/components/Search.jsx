import {useRef} from "react";

export const Search = ({fn})=>{
     const artist = useRef();
    return (
        <>
    <label>Artist Name</label>
    <input ref ={artist} type = 'text' className="form-control" placeholder = "Search Artist Wise"/>
    <button className="btn btn-success" onClick = {()=>{
        fn(artist.current.value);
    }}>Search It</button>
    </>
    );
}