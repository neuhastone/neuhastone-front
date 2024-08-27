import './walky.css'
import focusImage from './focus.svg'; // 이미지 파일을 같은 폴더에서 import

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