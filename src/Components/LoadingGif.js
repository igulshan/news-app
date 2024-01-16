import React ,{Component} from 'react'
import spiningGif from '../Assets/Spinner.gif';

export default class LoadingGif extends Component{
    render(){
        return(
            <div className='text-center'>
                <img style={{height:30,width:30}} src={spiningGif} alt='loading'></img>
            </div>
        )
    }
}