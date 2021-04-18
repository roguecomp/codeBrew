import React from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"


function AppDescriptionElement(props){
    const {index, title, detailDes, img_src} = props
    const imgLeft = (index%2 ==0 )
    return (
        <div className = 'description-element'>
            {(imgLeft) &&<img src ={img_src} data-aos = "fade-right"/> }
            <div className ='description-text' data-aos = {(imgLeft)?"fade-left" :"fade-right"}>
                <div className="description-title" >{title}</div>
                <div>{detailDes}</div>
            </div>
            {(!imgLeft ) &&<img src ={img_src} data-aos = "fade-left"/> }

        </div>
    )
}

export default AppDescriptionElement;