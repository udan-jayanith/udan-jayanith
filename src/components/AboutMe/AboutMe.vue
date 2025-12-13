<script setup>
import { ref, onBeforeMount } from "vue";
import Social from "./Social/Social.vue";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faStackOverflow } from "@fortawesome/free-brands-svg-icons";
library.add(faGithub);
library.add(faXTwitter);
library.add(faStackOverflow);

//https://api.github.com/users/udan-jayanith

async function fetchProfileData() {
	let res = await fetch(`https://api.github.com/users/udan-jayanith`);
	let json = await res.json();
	return json;
}

let profileData = ref(null);

onBeforeMount(async () => {
	profileData.value = await fetchProfileData();
});
</script>

<template>
	<div class="about-me-container">
		<div class="about-me">
			<h1>Hey {{ profileData ? profileData.name : "" }} here.</h1>
			<p>{{ profileData ? profileData.bio : "" }}</p>
			<Social></Social>
		</div>
		<img
			:src="profileData ? profileData.avatar_url : '#'"
			alt="profile picture"
			class="profile-picture"
			:title="profileData ? profileData.login : ''"
		/>
	</div>
</template>

<style scoped>
.about-me-container {
	display: flex;
	flex-direction: row;
	justify-content: left;
	align-items: center;
	gap: 20px;
	width: 100%;
	height: 180px;

	padding: 0px 0px;
	margin: 0px;

	.about-me {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		gap: 10px;
		
		height: 100%;
		text-wrap-style: pretty;
		p,
		h1 {
			text-wrap: pretty;
			margin: 0px;
		}

		p {
			padding-left: 4px;
		}
	}

	.profile-picture {
		width: fit-content;
		height: 100%;
		object-fit: contain;
		box-shadow: var(--box-shadow);
		border-radius: 4px;

		display: flex;
		justify-content: center;
		align-items: center;

		margin-left: auto;
	}

	@media (orientation: portrait) {
		.profile-picture {
			display: none;
		}
	}
}
</style>
