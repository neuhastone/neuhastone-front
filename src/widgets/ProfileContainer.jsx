import React, { useState } from 'react';
import styles from './ProfileContainer.module.css';

const ProfileContainer = () => {
    const [profileImage, setProfileImage] = useState(null); // 프로필 이미지 상태

    // 이미지 업로드 핸들러
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setProfileImage(imageUrl);
        }
    };

    return (
        <div className={styles.profileContainer}>
            <div className={styles.imagePreview}>
                {profileImage ? (
                    <img src={profileImage} alt="프로필 이미지" className={styles.profileImage} />
                ) : (
                    <span className={styles.defaultIcon}>📷</span> // 기본 아이콘
                )}
            </div>
            <label htmlFor="imageUpload" className={styles.uploadButton}>
                이미지 업로드
            </label>
            <input
                type="file"
                id="imageUpload"
                accept="image/*"
                onChange={handleImageUpload}
                className={styles.hiddenInput} // 숨김 처리
            />
        </div>
    );
};

export default ProfileContainer;