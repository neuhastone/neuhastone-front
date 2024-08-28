import React, { useEffect } from 'react';
import './walky.css';
import focusImage from './focus.svg'; // 이미지 파일을 같은 폴더에서 import
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const WalkyPage = () => {
    useEffect(() => {
        // 컴포넌트가 마운트될 때 GSAP 애니메이션을 적용
        gsap.to(".callBtn", { rotation: 360, x: 100, duration: 3 });
    }, []); // 빈 배열은 의존성 배열로, 이 효과가 컴포넌트가 처음 마운트될 때 한 번만 실행됨.

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
            <div className="callBtn">
                <p>start</p>
            </div>
        </div>
    );
};

export default WalkyPage;
