<template>
  <div class="container">
    <h1 class="p-4 text-center">vee-validate form</h1>
    <!-- rules 帶上驗證的規則。注意：規則之間不需要帶上空白鍵。
    v-slot 帶上預計回傳的回饋內容。-->
    <Form v-slot="{ errors, values, validate }" @submit="onSubmit">
      {{ errors }} {{ values }}
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <Field
          id="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="請輸入 Email"
          :class="{ 'is-invalid': errors['email'] }"
          rules="email|required"
          v-model="user.email"
        ></Field>
        <error-message name="email" class="invalid-feedback"></error-message>
      </div>

      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <Field
          id="password"
          name="密碼"
          type="password"
          class="form-control"
          placeholder="請輸入密碼"
          :class="{ 'is-invalid': errors[('min', 'max')] }"
          rules="required|min:8|max:15"
          v-model="user.password"
        ></Field>
        <error-message name="password" class="invalid-feedback"></error-message>
      </div>

      <div class="mb-3">
        <label for="name" class="form-label">姓名</label>
        <Field
          id="name"
          name="姓名"
          type="text"
          class="form-control"
          placeholder="請輸入姓名"
          rules="required"
          v-model="user.name"
          :class="{ 'is-invalid': errors['required'] }"
        ></Field>
        <error-message name="姓名" class="invalid-feedback"></error-message>
      </div>

      <div class="mb-3">
        <label for="phone" class="form-label">電話</label>
        <!-- regex包含手機和市話 -->
        <Field
          id="phone"
          name="電話"
          type="text"
          class="form-control"
          placeholder="請輸入電話"
          v-model="user.phone"
          :rules="{
            regex: /(\d{2,3}-?|\(\d{2,3}\))\d{3,4}-?\d{4}|09\d{2}(\d{6}|-\d{3}-\d{3})/,
            required: true,
          }"
        ></Field>
        <error-message name="電話" class="invalid-feedback"></error-message>
      </div>

      <div class="mb-3">
        <label for="region" class="form-label">地區</label>
        <!-- 用as指定成特定標籤 -->
        <Field
          id="region"
          name="地區"
          class="form-control"
          v-model="user.region"
          as="select"
          :class="{ 'is-invalid': errors['required'] }"
          rules="required"
        >
          <option disabled value="">請選擇地區</option>
          <option value="台北市">台北市</option>
          <option value="高雄市">高雄市</option>
        </Field>
        <error-message name="地區" class="invalid-feedback"></error-message>
      </div>

      <div class="mb-3">
        <label for="address" class="form-label">地址</label>
        <Field
          id="address"
          name="地址"
          type="text"
          class="form-control"
          placeholder="請輸入地址"
          v-model="user.address"
        ></Field>
        <error-message name="地址" class="invalid-feedback"></error-message>
      </div>

      <button class="btn btn-primary" type="submit" @click="validate">
        Submit
      </button>
    </Form>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      user: {
        email: "",
        password: "",
        name: "",
        phone: "",
        region: "",
        address: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log(this.user);
    },
  },
  created() {
    console.log(this);
  },
};
</script>
<style lang="scss" scoped></style>
