<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="用户名">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
        </el-form>

    </div>
</template>

<script>
export default {
  data() {
    return {
      form: {}
    };
  }
};
</script>

<style>
</style>
