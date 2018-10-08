<template>
	<nav>
		<object><strong>VINNI</strong>HOKE - Blog</object>
		<ul id="menu">
			<li><router-link to="/" exact>Blog</router-link></li>
			<li><router-link to="/add" exact>Add a Post</router-link></li>
		</ul>
	</nav>
</template>

<script>
export default {};
</script>

<style scoped>
ul {
  list-style-type: none;
  text-align: center;
  margin: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #fff;
  text-decoration: none;
  padding: 6px 8px;
  border-radius: 10px;
}
nav {
  background: #444;
  padding: 14px 0;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
}
.router-link-active {
  background: #eee;
  color: #444;
}
object {
  color: #fff;
  padding-left: 15px;
}
</style>
