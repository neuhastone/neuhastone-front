import './walky.css'
import focusImage from './focus.svg'; // 이미지 파일을 같은 폴더에서 import
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";


// gsap.registerPlugin(useGSAP);
gsap.to(".callBtn", { // 타겟
    x: 200, // 속성
    duration: 2// 속성 값(선택)
    });


const WalkyPage = () => {
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