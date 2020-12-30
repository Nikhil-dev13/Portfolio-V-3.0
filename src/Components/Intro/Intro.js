import React from 'react'
import Dp from '../../Assets/cartoon.jpeg'
export default function Intro() {
    return (
        <div className="container" style={{width:350}}>
            <img src={Dp} style={{borderRadius:"50%" , height:250 , width:250 , border:'1px solid white' , align:'left'}} />
            <h1 style={{textAlign:'left' , color:'white'}}>Nikhil Chacko</h1>
            <h4 style={{textAlign:'left', color:'white'}}>Nikhil-dev13</h4>
            <p style={{textAlign:'left', color:'white'}}>Web Developer | MERN<br/>Python<br/></p>
            <button type="button" class="btn btn-secondary" style={{width:300 ,marginBottom:10}}>View Github</button>
            <br />
            <div style={{textAlign:'left'}}>
            <i class="fa fa-map-marker" aria-hidden="false" style={{color:'#C8C9CA', fontWeight:10}}></i> <span style={{color:'white'}}>India</span>
            <br/>
            </div>
            <hr style={{ width:'100%' , height:1 , borderWidth:0 , backgroundColor:'#a0a3a5'}} />
            <div style={{textAlign:'left'}}>
            
            <br/>
            {/* <i class="fa fa-link" aria-hidden="false" style={{color:'white'}}></i> <span style={{color:'white'}}>http://shashwat-mishra.surge.sh/</span> */}
            </div>

        </div>
    )
}
