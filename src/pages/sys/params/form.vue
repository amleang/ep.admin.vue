<template>
  <el-dialog title="参数表单" :visible.sync="formDialog" top="20vh" width="600px" :modal-append-to-body="false" :close-on-click-modal="false" :before-close="handleClose">
    <el-form ref="form" class="form" :rules="rules" :model="form" label-width="80px">
      <el-form-item label="名称" prop="name">
        <el-input size="small" v-model="form.name" maxlength="50" style="width:350px;" placeholder="请输入名称"></el-input>
      </el-form-item>
      <el-form-item label="值" prop="value">
        <el-input size="small" v-model="form.value" maxlength="50" style="width:350px;" placeholder="请输入值"></el-input>
      </el-form-item>
      <el-form-item label="状态" prop="active">
        <el-select size="small" v-model="form.active" placeholder="请选择" style="width:350px;">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="排序" prop="weight">
        <el-input-number size="small" v-model="form.weight" style="width:350px;" controls-position="right" :min="0" :max="999999999" placeholder="请设置排序"></el-input-number>
      </el-form-item>
      <el-form-item label="备注" prop="remark">
        <el-input type="textarea" :rows="2" style="width:350px;" placeholder="请输入内容" v-model="form.remark"></el-input>

      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="handleClose">取 消</el-button>
      <el-button type="primary" @click="handleOk">确 定</el-button>
    </div>
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
      visible: true,
      form: {},
      rules: {
        name: [{ required: true, message: "请输入名称", trigger: "blur" }],
        value: [{ required: true, message: "请输入值", trigger: "blur" }],
        active: [{ required: true, message: "请选择状态", trigger: "blur" }],
        weight: [{ required: true, message: "请设置排序", trigger: "blur" }]
      },
      options: [{ label: "启用", value: 1 }, { label: "禁用", value: 0 }]
    };
  },
  methods: {
    handleClose() {
      this.$refs["form"].resetFields();
      this.$emit("dialogvisible", { dialog: false, isreload: false });
    },
    handleOk() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.form.pid = this.formType;
          if (this.id == 0) {
            this.$http.post("/api/params", this.form).then(res => {
              if (res.code == 200) {
                this.$message({
                  message: "添加成功",
                  type: "success"
                });
                this.$emit("dialogvisible", { dialog: false, isreload: true });
              } else this.$message.error(res.msg);
            });
          } else {
            this.$http.put("/api/params/" + this.id, this.form).then(res => {
              console.log("update", res);
              if (res.code == 200) {
                this.$message({
                  message: "修改成功",
                  type: "success"
                });
                this.$emit("dialogvisible", { dialog: false, isreload: true });
              } else this.$message.error(res.msg);
            });
          }
        }
      });
    }
  },
  watch: {
    formDialog() {
      if (this.formDialog) {
        if (this.id != 0) {
          this.$http.get("/api/params/" + this.id).then(res => {
            console.log("item=>", res);
            if (res.code == 200) {
              this.form = {
                name: res.docs.name,
                value: res.docs.value,
                active: res.docs.active,
                weight: res.docs.weight,
                remark: res.docs.remark
              };
            } else this.$message.error(res.msg);
          });
          console.log("update", this.id);
        }
      }
    }
  }
};
</script>

<style>
</style>
