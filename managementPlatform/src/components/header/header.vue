<template lang="html">
  <header>
    <div class="logo f-l">
      <img src="./logo.png" width="162" height="38" />
      <h2>租贷管理平台</h2>
    </div>
    <div class="user-info f-r">
      <div class="info-num p-r f-l">
        <i class="icon iconfont icon-tongzhi"></i>
        <i class="num p-a">99</i>
      </div>
      <div class="user-avatar f-l">
        <i class="icon iconfont icon-yonghu"></i>
        <i>用车找我</i>
      </div>
    </div>
  </header>
</template>
<script type="text/ecmascript-6">
  export default{}
</script>
<style lang="less" rel="stylesheet/less">
  header{
    background: #3366cc;
    height:40px;
    padding: 20px;
    color: #fff;
    .logo{
      height:38px;
      img{
        display: inline-block;
        border-right:1px solid #fff;
        padding-right: 20px;
      }
      h2{
        display: inline-block;
        margin-top: 4px;
        margin-bottom: 0;
        margin-left: 13px;
        color: #fff;
        font-size: 22px;
        vertical-align: top;
        font-weight: normal;
      }
    }
    .user-info{
      .info-num{
        .icon-tongzhi{
          font-size:22px;
        }
        .num{
          display: inline-block;
          top: 3px;
          left: 14px;
          padding: 2px;
          border-radius: 6px;
          background: red;
          font-size: 12px;
          line-height: 10px;
        }
      }
      .user-avatar{
        vertical-align: top;
        margin-left: 20px;
        font-size: 16px;
        .icon-yonghu{
          font-size: 26px;
        }
        i{
          vertical-align: middle;
        }

      }
    }

  }
</style>
