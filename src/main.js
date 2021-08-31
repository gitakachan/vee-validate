import { createApp } from "vue";
import App from "./App.vue";

import "bootstrap"; // 從nodeModule中載入Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"; // Import css file

import { Field, Form, ErrorMessage, defineRule, configure } from "vee-validate"; // 匯入 vee-validate 主套件
import { required, email, min, max, regex } from "@vee-validate/rules"; // 匯入 vee-validate 相關規則
import { localize, setLocale } from "@vee-validate/i18n"; // 匯入多國語系的功能
import zhTW from "@vee-validate/i18n/dist/locale/zh_TW.json"; //// 匯入繁體中文語系檔案

// 定義驗證規則
defineRule("required", required);
defineRule("email", email);
defineRule("min", min);
defineRule("max", max);
defineRule("regex", regex);

// 設定 vee-validate 全域規則
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true, // 當輸入任何內容直接進行驗證
});
setLocale("zh_TW"); // 設定預設語系

const app = createApp(App);

app.component("Form", Form);
app.component("Field", Field);
app.component("ErrorMessage", ErrorMessage);

app.mount("#app");
