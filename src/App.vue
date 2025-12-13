<script setup>
import { onMounted, ref } from 'vue';

import AboutMe from './components/AboutMe/AboutMe.vue';
import Nav from './components/Nav/Nav.vue';
import ProjectSelection from './components/ProjectsSection/ProjectSelection.vue';
import ExperienceSection from './components/ExperienceSection/ExperienceSection.vue';

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
		<Nav class="nav"></Nav>
		<h2 id="projects">Projects</h2>
		<ProjectSelection></ProjectSelection>
		<h2 id="experience">Experience</h2>
		<ExperienceSection></ExperienceSection>
	</main>
</template>

<style scoped>
.main-body {
	margin: 0px;
	margin-left: auto;
	margin-right: auto;
	margin-top: 26px;
	padding-bottom: 60px;
	width: 50%;
	min-height: 100vh;
	max-width: 100%;
	box-sizing: border-box;
	
	.nav{
		margin-top: 2rem;
	}
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
