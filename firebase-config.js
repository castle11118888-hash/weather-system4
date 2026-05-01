// firebase-config.js（7.3.5 最簡單穩定版）

// 判斷環境
const isTestEnv =
  location.hostname.includes("test") ||
  location.hostname.includes("localhost");

// 🔥 正式 Firebase（⚠️ 先空著沒關係）
const firebaseConfigProd = {
  apiKey: "",
  authDomain: "",
  projectId: "",
};

// 🔥 測試 Firebase（你現在用的）
const firebaseConfigTest = {
  apiKey: "AIzaSyAexaKh3E9WLRIVdY0WieF4hAlD9caGMTo",
  authDomain: "handover-system-test.firebaseapp.com",
  projectId: "handover-system-test",
};

// 自動選擇
const firebaseConfig = isTestEnv
  ? firebaseConfigTest
  : firebaseConfigProd;

// 👉 給 index.html 用（關鍵）
window.firebaseConfig = firebaseConfig;
window.firebaseEnabled = true;

// Debug
console.log("🔥 Firebase:", firebaseConfig.projectId);
console.log("🌍 ENV:", isTestEnv ? "TEST" : "PROD");
