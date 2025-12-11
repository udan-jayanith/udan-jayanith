<script setup>
import AboutMe from './components/AboutMe/AboutMe.vue';
import ProjectSelection from './components/ProjectsSection/ProjectSelection.vue';
import { onMounted, ref } from 'vue';

let spritePos = ref({x:0, y:0})
let scrollY = 0

onMounted(() => {
  window.addEventListener('mousemove', (event)=>{
  	spritePos.value = {x:event.x, y:event.y-26+scrollY}
  });

  window.addEventListener('scroll', ()=>{
   	scrollY = window.scrollY
  });
});
</script>

<template>
	<main class="main-body">
		<img src="./assest//cat.gif" class="sprite" :style="{top:spritePos.y+'px', left:spritePos.x+'px'}"></img>
		<AboutMe></AboutMe>
		<hr />
		<h2>Projects</h2>
		<ProjectSelection></ProjectSelection>
	</main>
</template>

<style scoped>
.main-body {
	margin: 0px;
	margin-left: auto;
	margin-right: auto;
	margin-top: 26px;
	margin-bottom: 36px;
	width: 50%;
	min-height: 100vh;
	max-width: 100%;
	box-sizing: border-box;
}

.sprite{
	width: 38px;
	position: absolute;
	z-index: 99;
	top: 0px;
}

@media (orientation: portrait) {
	.main-body{
		padding: 1rem 2rem;
		width: auto;
	}
	.sprite{
		display: none;
	}
}

</style>
