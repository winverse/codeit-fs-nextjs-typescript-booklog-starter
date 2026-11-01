"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import { TextField } from "@/components/TextField";
import { useLoginContext } from "@/contexts/LoginContext";
import * as styles from "./UserMenu.css";

function UserMenu() {
  const { currentUsername, setCurrentUsername } = useLoginContext();
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCurrentUsername(name);
    setName("");
  };

  const handleLogoutClick = () => {
    setCurrentUsername(undefined);
  };

  if (currentUsername) {
    return (
      <div className={styles.userMenu}>
        <span>{currentUsername}님</span>
        <Button variant="secondary" onClick={handleLogoutClick}>
          로그아웃
        </Button>
      </div>
    );
  }

  return (
    <form className={styles.userMenu} onSubmit={handleSubmit}>
      <TextField
        label="이름"
        value={name}
        onChange={handleNameChange}
        placeholder="이름을 입력하세요"
      />
      <Button type="submit" disabled={!name}>
        로그인
      </Button>
    </form>
  );
}

export default UserMenu;
