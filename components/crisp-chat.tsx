"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("dbd75130-d1c3-41ba-acc8-ba01b5fa47b5")
  }, [])

  return null;
}