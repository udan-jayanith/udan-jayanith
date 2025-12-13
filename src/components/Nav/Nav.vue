<script setup></script>

<template>
	<nav class="navigation-menu">
		<a class="nav-item" href="#projects">Projects</a>
		<a class="nav-item" href="#experience">Expirence</a>
		<!--	<a class="nav-item" href="#">Education</a>-->

		<a class="nav-item contact" href="#contact">Contact</a>
	</nav>
</template>

<style scoped>
.navigation-menu {
	width: 100%;

	border-top: var(--border);
	border-bottom: var(--border);
	padding: 0px 2px;

	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	gap: 10px;

	font-family: "Merriweather", serif;
	font-optical-sizing: auto;
	font-style: normal;
	font-weight: 600;
	font-variation-settings: "wdth" 100;
	font-size: medium;

	.nav-item {
		text-decoration: none;
		cursor: pointer;
		user-select: none;

		padding: 4px 8px;
		color: var(--black);
		&:hover {
			background-color: #f1e8cb;
		}
	}

	/*
	.contact {
		margin-left: auto;
	}
	*/

	@media (orientation: portrait) {
		.contact {
			margin-left: 0px;
		}
	}
}

@media (orientation: portrait) {
	.navigation-menu {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		gap: 0px;
		padding: 0px;
	}
}
</style>
