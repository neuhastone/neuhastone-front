import { useState } from 'react';

// 스타일링을 위한 간단한 CSS
const styles = {
  chip: {
    display: 'inline-block',
    padding: '5px 10px',
    margin: '5px',
    backgroundColor: '#e0e0e0',
    borderRadius: '15px',
    cursor: 'pointer',
  },
  dropdown: {
    border: '1px solid #ccc',
    borderRadius: '4px',
    position: 'absolute',
    width: '200px',
    maxHeight: '100px',
    overflowY: 'auto',
    backgroundColor: '#fff',
    zIndex: 1,
  },
  dropdownItem: {
    padding: '8px',
    cursor: 'pointer',
  },
  input: {
    width: '200px',
    padding: '8px',
    margin: '5px 0',
  }
};

const MemberInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [emails, setEmails] = useState([]);

  // 이메일 도메인 추천 목록
  const emailDomains = ['gmail.com', 'naver.com', 'yahoo.com', 'hotmail.com'];

  // 입력 필드에서 변경이 있을 때 처리
  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // 입력 값이 '@' 이전에만 이메일 도메인 추천 표시
    if (value.includes('@')) {
      const [localPart, domainPart] = value.split('@');
      const filteredDomains = emailDomains.filter(domain =>
        domain.startsWith(domainPart)
      );
      setSuggestions(filteredDomains.map(domain => `${localPart}@${domain}`));
    } else {
      setSuggestions([]);
    }
  };

  // 이메일 선택 시 Chips로 추가
  const handleSelectSuggestion = (email) => {
    setEmails([...emails, email]);
    setInputValue('');  // 입력 필드 초기화
    setSuggestions([]); // 추천 목록 초기화
  };

  // Chips 삭제 기능
  const handleRemoveEmail = (indexToRemove) => {
    setEmails(emails.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      
      {/* 이메일 입력 필드 */}
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="이메일 입력"
        style={styles.input}
      />

      {/* 이메일 제안 드롭다운 */}
      {suggestions.length > 0 && (
        <div style={styles.dropdown}>
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              onClick={() => handleSelectSuggestion(suggestion)}
              style={styles.dropdownItem}
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}

      {/* 선택된 이메일 Chips 표시 */}
      <div>
        {emails.map((email, index) => (
          <div
            key={index}
            style={styles.chip}
            onClick={() => handleRemoveEmail(index)}
          >
            {email} <span style={{ marginLeft: '10px', cursor: 'pointer' }}>x</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemberInput;