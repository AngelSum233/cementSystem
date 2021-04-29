<template>
  <div class="datashow">
    <el-card>
      <div :style="{'width': '270px'}">
        <el-input placeholder="请输入内容" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <div class="datashow-btns">
        <el-button :style="{'margin-right': '25px'}" type="primary" plain icon="el-icon-upload2">批量导入</el-button>
        <el-button type="danger" plain icon="el-icon-search">批量删除</el-button>
      </div>
      <el-table
        stripe
        :data="dataList"
        style="width: 100%">
        <el-table-column
          align="center"
          type="selection"
          width="25">
        </el-table-column>
        <el-table-column
          align="center"
          prop="name"
          label="井号"
          width="180">
        </el-table-column>
        <el-table-column
          align="center"
          prop="height"
          label="井深">
        </el-table-column>
        <el-table-column
          align="center"
          prop="around"
          label="井径">
        </el-table-column>
        <el-table-column
          align="center"
          prop="angle"
          label="最大井斜">
        </el-table-column>
        <el-table-column
          align="center"
          prop="oliside"
          label="油气层底界">
        </el-table-column>
        <el-table-column
          align="center"
          prop="saltposition"
          label="盐层位置">
        </el-table-column>
        <el-table-column
          align="center"
          prop="density"
          label="水泥浆密度">
        </el-table-column>
        <el-table-column
          prop="date"
          align="center"
          label="时间"
          width="120">
        </el-table-column>
        <el-table-column label="操作" align="center" width="120">
          <template >
              <el-button type="primary" size="mini" icon="el-icon-edit"></el-button>
              <el-button type="danger" size="mini" icon="el-icon-delete"></el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dataList: [
        {
          date: '2016-05-02',
          name: '12',
          height: '22',
          around: '11',
          angle: '16.5',
          oliside: '83',
          saltposition: '34.56',
          density: '1.8'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.datashow{
  height: 100%;
  .datashow-btns{
    margin-top: 15px;
    margin-bottom: 15px;
  }
}

</style>
