<script setup>
import AboutMe from "~/components/AboutMe/AboutMe.server.vue";
import Nav from "~/components/Nav/Nav.server.vue";
import ProjectSelection from "~/components/ProjectsSection/ProjectSelection.server.vue";
import ExperienceSection from "~/components/ExperienceSection/ExperienceSection.server.vue";
</script>

<template>
	<article class="main-article">
		<AboutMe></AboutMe>
		<Nav class="nav"></Nav>
		<h2 id="projects">Projects</h2>
		<ClientOnly>
			<ProjectSelection></ProjectSelection>
		</ClientOnly>
		<h2 id="experience">Experience</h2>
		<ExperienceSection></ExperienceSection>
	</article>
</template>

<style scoped>
.main-article {
	margin: 0px;
	min-height: 100vh;
	max-width: 100%;
	box-sizing: border-box;

	.nav {
		margin-top: 2rem;
	}
}
</style>
