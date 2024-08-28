import React, { useEffect } from 'react';
import './walky.css';
import focusImage from './focus.svg'; // 이미지 파일을 같은 폴더에서 import
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";

const WalkyPage = () => {
    
    gsap.registerPlugin(TextPlugin);

    useGSAP(()=>{
        gsap.to(".callBtn", {
            rotation: 360, x: 100, duration: 1 
        });

        gsap.to(".text", {
            duration: 2,
            text: "안녕하세요 삥삥이에요",
            delay: 1
        });
    },[]);
    
    return (
        <div className="container">
            <div className="focusWrap">
                <div><img className='focusSvg' src={focusImage} alt="Focus" /></div>
                <div><img className='focusSvg' src={focusImage} alt="Focus" /></div>
            </div>
            <div className="walkySub">Where                     are        you                 now?</div>
            <div className="walkyTitle">
                Walky
                Talky
            </div>
            <div className="walkySub">Call Back                                              ASAP</div>
            <div className="focusWrap">
                <div><img className='focusSvg' src={focusImage} alt="Focus" /></div>
                <div><img className='focusSvg' src={focusImage} alt="Focus" /></div>
            </div>
            <div className="btnContainer">
                <div className="callBtn">
                    <p>start</p>
                </div>
            </div>
            <div className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Reprehenderit aut sunt expedita! Tempora illo corrupti inventore 
                fugit doloribus? Alias, porro. Lorem, ipsum dolor sit amet 
                consectetur adipisicing elit. Facilis recusandae reiciendis 
                pariatur autem corporis labore sed architecto unde nostrum 
                voluptas eum sequi repellat voluptatem fuga, accusamus dicta 
                possimus magni fugit obcaecati debitis tempora consequatur 
                tenetur. Officiis eaque possimus illum esse deserunt mollitia 
                distinctio enim eius quod minima totam, nisi architecto?
            </div>
        </div>
    );
};

export default WalkyPage;
