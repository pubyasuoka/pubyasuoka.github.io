<template>
  <div id="app">
    <header class="header-pc">
      <div id="nav">
        <router-link to="/" >Home</router-link> 
        <router-link to="/about" exact>About</router-link>
        <router-link to="/work" exact>Work</router-link>
        <router-link to="/skill" exact>Skills</router-link>
      </div>
    </header>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif,'メイリオ';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:12vh;
}
.header-pc {
  background :#78D9E5;
  padding-top:05px;
}

#nav {
  display:flex;
  font-size:2.8vw;
  margin-top:5;
  background:white;
}

#nav a {
  text-decoration:none; /*下線を無くす*/
  color: #2c3e50;
  padding-top:8px;
  padding-left:15px;
  padding-right:15px;
  padding-bottom:6px;
}

a:hover {
  opacity:.6;
  background:#E8EAEB;
}

#nav a.router-link-exact-active {
  color: white;
  background:#78D9E9;
  pointer-events:none;
}
</style>
