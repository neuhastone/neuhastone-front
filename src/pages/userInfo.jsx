import React, { useState } from 'react';
// import Button from "@shared/ui/Button";
import InputText from "@shared/ui/InputText";
import Header from "@shared/ui/header";
import styles from "./userInfo.module.css";

function UserInfoPage() {
    const [inputValue, setInputValue] = useState("");  // 상태값

    const handleInputChange = (event) => {
        setInputValue(event.target.value);  // 상태값 변경 핸들러
    };

    return (
        <div>
            <div>
            <Header 
                    title="유저 정보 조회" 
                    buttons={[
                        {label: "로그아웃", onClick: () => console.log("로그아웃 버튼 클릭됨!")},
                        {label: "수정하기",onClick: () => console.log("수정하기 버튼 클릭됨!")}
                    ]}
            />
            </div>
            <div className={styles.userInfoContainer}>
                <InputText
                    type="text"
                    placeholder="닉네임을 입력해주세요"
                    value={inputValue}  // 상태값 전달
                    onChange={handleInputChange}  // 상태값 변경 핸들러 전달
                    required={true}
                    className="custom-class"
                    title="닉네임"  // 제목 추가
                />
                <InputText
                    type="text"
                    placeholder="이름을 입력해주세요"
                    value={inputValue}  // 상태값 전달
                    onChange={handleInputChange}  // 상태값 변경 핸들러 전달
                    required={true}
                    className="custom-class"
                    title="이름"  // 제목 추가
                />
                <InputText
                    type="email"
                    placeholder="이메일을 입력해주세요"
                    value={inputValue}  // 상태값 전달
                    onChange={handleInputChange}  // 상태값 변경 핸들러 전달
                    required={true}
                    className="custom-class"
                    title="이메일"  // 제목 추가
                />
                <InputText
                    type="password"
                    placeholder="새 비밀번호를 입력해주세요"
                    value={inputValue}  // 상태값 전달
                    onChange={handleInputChange}  // 상태값 변경 핸들러 전달
                    required={true}
                    className="custom-class"
                    title="비밀번호"  // 제목 추가
                />
                <InputText
                    type="password"
                    placeholder="새 비밀번호를 입력해주세요"
                    value={inputValue}  // 상태값 전달
                    onChange={handleInputChange}  // 상태값 변경 핸들러 전달
                    required={true}
                    className="custom-class"
                />
            </div>
        </div>
    );
}

export default UserInfoPage;
