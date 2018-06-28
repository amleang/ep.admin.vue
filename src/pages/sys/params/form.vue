<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="名称">
        <el-input size="small" v-model="form.name" style="width:350px;"></el-input>
      </el-form-item>
      <el-form-item label="值">
        <el-input size="small" v-model="form.value" style="width:350px;"></el-input>
      </el-form-item>
      <el-form-item label="状态">
        <el-select size="small" v-model="form.active" placeholder="请选择" style="width:350px;">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
       <el-form-item label="排序">
        <el-input-number size="small" v-model="form.weight" style="width:350px;" controls-position="right"  :min="1" :max="999999999"></el-input-number>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
export default {
  props: {
    formType: {
      type: Number,
      default: 0
    },
    formreadonly: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      form: {},
      options: [{ label: "启用", value: 1 }, { label: "禁用", value: 0 }]
    };
  }
};
</script>

<style>
</style>
