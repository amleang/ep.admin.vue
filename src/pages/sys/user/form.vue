<template>
    <el-dialog title="用户表单" :visible.sync="formDialog" top="20vh" width="600px" :modal-append-to-body="false" :close-on-click-modal="false" :before-close="handleClose">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="登录名" prop="name">
                <el-input size="small" v-model="form.account" maxlength="50" style="width:350px;" placeholder="请输入名称"></el-input>
            </el-form-item>
            <el-form-item label="真是姓名" prop="name">
                <el-input size="small" v-model="form.relName" maxlength="50" style="width:350px;" placeholder="请输入名称"></el-input>
            </el-form-item>
            <el-form-item label="Email" prop="email">
                <el-input size="small" v-model="form.email" maxlength="50" style="width:350px;" placeholder="请输入名称"></el-input>
            </el-form-item>
            <el-form-item label="状态" prop="active">
                <el-select size="small" v-model="form.active" placeholder="请选择" style="width:350px;">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="排序" prop="weight">
                <el-input-number size="small" v-model="form.weight" style="width:350px;" controls-position="right" :min="0" :max="999999999" placeholder="请设置排序"></el-input-number>
            </el-form-item>
        </el-form>

    </el-dialog>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      default: 0
    },
    formDialog: {
      type: Boolean,
      default: false
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
  },
  methods: {
    handleClose() {}
  },
  watch: {
    formDialog() {}
  }
};
</script>

<style>
</style>
