"use client"

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web"

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("81684059-4fe1-4af9-8cba-2d17926d24d0");
  }, []);

  return null;
}

export default CrispChat;