<template lang="html">
  <div id="app">
    <v-header></v-header>
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
    <div class="main">
      <div class="nav">
        <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="light" unique-opened="">
          <router-link to="/">
            <el-menu-item index="1" @click="addTab(editableTabsValue2)">
              <i class="icon iconfont icon-shouye"></i>首页
            </el-menu-item>
          </router-link>
            <el-submenu index="2">
              <template slot="title"><i class="icon iconfont icon-danganguanli"></i>档案管理</template>
              <router-link to="/test">
                <el-menu-item index="2-1" @click="addTab(editableTabsValue2)">贷款档案</el-menu-item>
              </router-link>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title"><i class="icon iconfont icon-cheliangguanli"></i>车辆监控</template>
              <el-menu-item index="3-1" @click="addTab(editableTabsValue2)">实时定位</el-menu-item>
              <el-menu-item index="3-2" @click="addTab(editableTabsValue2)">轨迹回放</el-menu-item>
              <el-menu-item index="3-3" @click="addTab(editableTabsValue2)">电子围栏</el-menu-item>
              <el-menu-item index="3-4" @click="addTab(editableTabsValue2)">SIM卡管理</el-menu-item>
              <el-menu-item index="3-5" @click="addTab(editableTabsValue2)">设备管理</el-menu-item>
              <el-menu-item index="3-6" @click="addTab(editableTabsValue2)">车辆管理</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title"><i class="icon iconfont icon-jiankongguanli"></i>监控报表</template>
              <el-menu-item index="4-1" @click="addTab(editableTabsValue2)">里程报表</el-menu-item>
              <el-menu-item index="4-2" @click="addTab(editableTabsValue2)">停车报表</el-menu-item>
              <el-menu-item index="4-3" @click="addTab(editableTabsValue2)">在线报表</el-menu-item>
              <el-menu-item index="4-4" @click="addTab(editableTabsValue2)">报警信息</el-menu-item>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title"><i class="icon iconfont icon-zulinguanli"></i>贷款管理</template>
              <el-menu-item index="5-1" @click="addTab(editableTabsValue2)">贷款中</el-menu-item>
              <el-menu-item index="5-2" @click="addTab(editableTabsValue2)">贷款结束</el-menu-item>
            </el-submenu>
            <el-submenu index="6">
              <template slot="title"><i class="icon iconfont icon-xitongguanli"></i>系统设置</template>
              <el-menu-item index="6-1" @click="addTab(editableTabsValue2)">设备参数</el-menu-item>
              <el-menu-item index="6-2" @click="addTab(editableTabsValue2)">还款提醒</el-menu-item>
              <el-menu-item index="6-3" @click="addTab(editableTabsValue2)">信息标示</el-menu-item>
              <el-menu-item index="6-4" @click="addTab(editableTabsValue2)">账号管理</el-menu-item>
              <el-menu-item index="6-5" @click="addTab(editableTabsValue2)">其他设置</el-menu-item>
            </el-submenu>
          </el-menu>
      </div>
      <div class="content-wrap">
        <div class="topnav-wrap">
          <div class="topnav">
          <div class="wrap">
            <el-tabs v-model="editableTabsValue2" type="card" closable @tab-remove="removeTab" >
              <el-tab-pane v-for="(item, index) in editableTabs2" :label="item.title" :name="item.name">
                {{item.content}}
              </el-tab-pane>
            </el-tabs>
          </div>
          <!--<div class="f-l prev">-->
            <!--<i class="el-icon-d-arrow-left"></i>-->
          <!--</div>-->
          <!--<ul class="tab f-l">-->
            <!--<li><i></i>首页</li>-->
            <!--<li class="active"><i></i>实时定位</li>-->
            <!--<li><i></i>首页</li>-->
            <!--<li><i></i>首页</li>-->
            <!--<li><i></i>首页</li>-->
          <!--</ul>-->
          <!--<div class="f-r next">-->
            <!--<i class="el-icon-d-arrow-right"></i>-->
          <!--</div>-->
        </div>
        </div>
        <div class="content">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <footer>
      <div class="footer-wrap">
        <p>copyright@2013-2014.All Rights Reserved</p>
        <p>备案号：粤ICP备142029252号-1</p>
        <p>深圳市和合汽车信息服务有限公司版权所有</p>
      </div>
    </footer>
  </div>
</template>

<script type="text/ecmascript-6">
import header from '@/components/header/header'
export default {
  data () {
    return {
      editableTabsValue2: '1',
      editableTabs2: [{
        title: '首页',
        name: '1',
        content: ''
      }],
      tabIndex: 1
    }
  },
  name: 'app',
  components: {
    'v-header': header
  },
  mounted: function () {
    this.$nextTick(function () {
      this.cartView()
    })
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    addTab (targetName) {
      let newTabName = ++this.tabIndex + ''
      this.editableTabs2.push({
        title: 'New Tab',
        name: newTabName,
        content: ''
      })
      this.editableTabsValue2 = newTabName
    },
    removeTab (targetName) {
      let tabs = this.editableTabs2
      let activeName = this.editableTabsValue2
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.name
            }
          }
        })
      }
      this.editableTabsValue2 = activeName
      this.editableTabs2 = tabs.filter(tab => tab.name !== targetName)
    },
    cartView () {
      this.$http.get('/orderInfoList/queryBookOrderList').then(function (res) {
        console.log(res.body)
      })
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less">

#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.main{
  display: flex;
  width: 100%;
  position: absolute;
  top: 80px;
  bottom: 65px;
  overflow: hidden;
  background-color: #f5f5f5;
  .nav{
    flex: 0 0 280px;
    width: 280px;
    background-color: rgb(238, 241, 246);
    a{
      display: block;
    }
    .iconfont{
      vertical-align: middle;
      margin-right: 10px;
      font-size: 20px;
      font-weight: 400;
    }
  }
  .content-wrap{
    flex: 1;
  }
  .topnav-wrap{
    box-sizing: border-box;
    height: 56px;
    width: 100%;
    padding-top: 13px;
    background-color: #e5e7ec;
  }
  .topnav{
    display: flex;
    margin-right: 40px;
    position: fixed;
    right: 0;
    left: 279px;
    .wrap{
      width: 100%;
      padding-right: 20px;
      padding-left: 20px;
    }
    .prev, .next{
      flex: 0 0 18px;
      width: 18px;
      background-color: #dfe1e6;
      color: #fff;
      i{
        padding-left: 2px;
        padding-right: 2px;
        cursor: pointer;
      }
    }
    .tab{
      width:100%;
      min-width:880px;
      overflow: hidden;
      li{
        box-sizing: border-box;
        width:15%;
        min-width: 120px;
        max-width: 180px;
        position: relative;
        text-align: center;
        cursor: pointer;
        float: left;
        border-right:1px solid #d5d7db;
        font-size: 16px;
        i{
          position: absolute;
          top: 0;
          right: 0;
          width: 8px;
          height: 8px;
          margin: 8px;
          background-image: url("./common/img/close-icon.png");
          background-size: 8px 8px;
          background-repeat: no-repeat;
        }
      }
      .active{
        background-color: #f5f5f5;
      }
    }
  }
  .content{
    width:100%;
    min-width: 920px;
    margin-top: 15px;
    margin-left: 22px;
  }
}

footer{
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 50;
  width: 100%;
  border-top:1px solid rgba(99,100,102,0.2);
  background-color: #eef1f6;
  .footer-wrap{
    margin-top: 8px;
    margin-bottom: 8px;
  }
  p{
    text-align: center;
    line-height:16px;
    font-size: 12px;
    color: #636466;
  }
}

</style>
