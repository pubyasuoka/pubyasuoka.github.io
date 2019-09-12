<template>
<main id="about">
  <div class="title">
    <h1>About</h1>
  </div>
  <div id="box-wrapper">
    <table class="attr-table">
      <tbody> 
        <tr v-for="(attr,index) in attrs" v-biand:attr="user" v-bind:key="attr.id" v-bind:index="index">
          <th>
            {{attr.key}}
          </th>
          <td v-if="attr.url" class="attr-table--value">
            <a :href="attr.url" target="_blank" rel="noopener noreferrer">
              {{ attr.value }}
            </a>
          </td>
          <td v-else class="attr-table--value">
            {{ attr.value }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
 </main>
</template>

<script>

export default {
  name: 'about',
  data(){
    return{
      attrs:[
        {
          key:'Name:',
          value:'Yusuke Yasuoka',
          url:''
        },
        {
          key:'University:',
          value:'Apr 2018 -current Depatment of Material Engineering, University of Tokyo',
          url:''
        },
        {
          key:'github:',
          value:'pubyasuoka',
          url:'https://github.com/pubyasuoka'
        },
        {
          key:"Qiita:",
          value:'pubyasuoka',
          url:'https://qiita.com/pubyasuoka'
        },
        {
          key:'Mail',
          value:'pubyasuoka[at]gmail.com',
          url:''
        }
      ]
    }
  }
} 
</script>

<style scoped>
#about{
  --main-bg-color:#F3F1C3;
  width:max;
  height:84vh;
  /*Firefox,webkit,その他向け*/
  background: -moz-linear-gradient(top, white, var(--main-bg-color));
  background: -webkit-linear-gradient(top, white, var(--main-bg-color));
  background: linear-gradient(to bottom, white, var(--main-bg-color));
  position:relative;
}
#about .title{
  margin-top:4%;
  margin-left:0vw;
  width:100vw;
  height: 20%;
}
#about .title h1{
  width:100%;
  height:30%;
  font-size:8vmin;
  margin-left:0vw;
}
table{
  text-align:left;
  padding-left:20vw;
  font-size:4vmin;
  border-spacing: 2vh;
}
td{
  padding-left:2vw;
  font-size: 3vmin;
}
</style>