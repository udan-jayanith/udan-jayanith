<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faStackOverflow } from "@fortawesome/free-brands-svg-icons";
library.add(faGithub);
library.add(faXTwitter);
library.add(faStackOverflow);
</script>

<template>
	<div class="social" id="contact">
		<div class="media">
			<a href="https://github.com/udan-jayanith" title="Github" target="_blank"
				><FontAwesomeIcon :icon="faGithub"
			/></a>
		</div>
		<div class="media">
			<a
				href="https://stackoverflow.com/users/23336104/udan-jayanith"
				title="Stackoverflow"
				target="_blank"
				><FontAwesomeIcon :icon="faStackOverflow"
			/></a>
		</div>
	</div>
</template>

<style scoped>
.social {
	display: flex;
	flex-direction: row;
	justify-content: left;
	align-content: center;
	gap: 10px;
	margin-top: auto;
	.media {
		a {
			color: var(--black);
			font-size: 1.4rem;
		}
		a:hover {
			color: black;
		}
	}
}
</style>
