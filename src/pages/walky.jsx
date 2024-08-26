import './walky.css'

const WalkyPage = () => {
    return (
        <div className="container">
            <div className="svg"><img src="/focus.svg" alt="" /></div>
            {/* 이미지 어케 불러오는지 몰겠다!! */}
            <div className="walkySub">Where                     are        you                 now?</div>
            <div className="walkyTitle">
                Walky
                Talky
            </div>
            <div className="walkySub">Call Back                                              ASAP</div>
            <div className="callBtn">
                <p>start</p>
            </div>
        </div>
    );
};

export default WalkyPage;