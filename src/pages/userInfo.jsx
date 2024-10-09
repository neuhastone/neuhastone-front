import Button from "@shared/ui/Button";

function UserInfoPage() {
    return (
        <div style={{ display: "flex", gap: "10px" }}>
            <Button label="우니니?" variant="primary" onClick={() => console.log("Primary button clicked!")} />
            <Button label="삥삥이?" variant="primary" onClick={() => console.log("Primary button clicked!")} />
            <Button label="secondary" variant="secondary" onClick={() => console.log("Secondary button clicked!")} />
        </div>
    );
}

export default UserInfoPage;