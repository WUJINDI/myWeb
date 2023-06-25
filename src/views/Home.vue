<template>
  <div id="app">
    <div class="btnBox">
      <router-link to="/keyboard">
        <div class="btnClass">
          <img src="@/assets/键盘.png" />
        </div>
      </router-link>
      <router-link to="/kghome">
        <div class="btnClass">
          <img src="@/assets/企业图谱.png" />
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
#app {
  background-color: rgb(242, 240, 238);
}
.btnBox {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /*  间距 */
  gap: 30px;
}
.btnClass {
  width: 100px;
  height: 100px;
  /**图片在里面居中显示 */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  /**利用盒阴影营造立体感 */
  box-shadow: 18px 18px 30px rgba(0, 0, 0, 0.2), -18px -18px 30px rgba(255, 255, 255, 1);
  transition: all 0.2s ease-out;
}
img {
  width: 60px;
}
.btnClass:hover {
  cursor: pointer;
  box-shadow: 0 0 0 rgb(219, 219, 219), 0 0 0 rgba(255, 255, 255, 0.7), inset 18px 18px 30px rgba(187, 187, 187, 0.3), inset -18px -18px 30px rgba(255, 255, 255, 0.5);
}
.btnClass:hover img {
  width: 58px;
}
</style>
