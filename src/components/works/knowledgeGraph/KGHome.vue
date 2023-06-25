<template>
  <div>
    <div class="categoryDiv">
      <router-link to="/kghome/kgofit">
        <el-button round> 信息技术 </el-button>
      </router-link>
      <router-link to="/kghome/kgofmath">
        <el-button round>数学</el-button>
      </router-link>
      <router-link to="/kghome/kgofart">
        <el-button round>艺术</el-button>
      </router-link>
      <router-link to="/kghome/kgoftheme">
        <el-button round>融合</el-button>
      </router-link>
      <router-link to="/kghome/kgoftheme2">
        <el-button round>融合2</el-button>
      </router-link>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.categoryDiv {
  margin: 20px;
}
</style>
