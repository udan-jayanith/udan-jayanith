<script setup>
import AboutMe from './components/AboutMe/AboutMe.vue';
import ProjectSelection from './components/ProjectsSection/ProjectSelection.vue';
import { onMounted, ref } from 'vue';

let scrollY = 0
let spriteEl = ref(null)

function updateSpritePos({x, y}){
	if (spriteEl.value == null){
		return
	}
	 spriteEl.value.style.left = x+10+'px'
	 spriteEl.value.style.top = (y+scrollY)-16+'px'
}

onMounted(() => {
  window.addEventListener('mousemove', (event)=>{
 	updateSpritePos(event)
  });

  window.addEventListener('scroll', ()=>{
   	scrollY = window.scrollY
  });
});
</script>

<template>
	<main class="main-body">
		<img src="./assest/dancing-gopher.gif" class="sprite" ref="spriteEl" alt="dancing Gopher sprite"></img>
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
	width: 26px;
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
