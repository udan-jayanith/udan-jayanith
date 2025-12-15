<script setup lang="js">
import Social from '../AboutMe/Social/Social.server.vue';
</script setup>

<template>
	<footer id="footer">
		<span>&copy; 2025 udan-jayanith</span>
		<a href="https://github.com/udan-jayanith/udan-jayanith" target="_blank">Source code</a>
		<Social class="contacts-footer"></Social>
	</footer>
</template>

<style lang="css" scoped>
footer {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 10px;

	margin-top: 2rem;
	padding: 2px;

	.contacts-footer {
		margin-left: auto;
	}
}
</style>
