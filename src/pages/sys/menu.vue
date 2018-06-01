<template>
    <base-admin>
        <div class="daohang">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
    </base-admin>
</template>

<script>
export default {};
</script>

<style scoped>
.daohang{
    height:50px;
   display: flex;
   align-items: center;
}
</style>
