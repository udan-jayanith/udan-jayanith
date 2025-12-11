<script setup>
import AboutMe from './components/AboutMe/AboutMe.vue';
import ProjectSelection from './components/ProjectsSection/ProjectSelection.vue';
</script>

<template>
	<main class="main-body">
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
	width: 50%;
	min-height: 100vh;
	max-width: 100%;
	box-sizing: border-box;
}

@media (orientation: portrait) {
	.main-body{
		padding: 1rem 2rem;
		width: auto;
	}
}

</style>
