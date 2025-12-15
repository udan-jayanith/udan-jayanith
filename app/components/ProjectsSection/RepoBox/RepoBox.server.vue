<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";

library.add(faStar);

let props = defineProps({
	repo: Object,
});
</script>

<template>
	<div class="repo-box">
		<div class="header">
			<a :href="`https://github.com/udan-jayanith/${props.repo.name}`" target="_blank">{{
				props.repo.name ? props.repo.name : ""
			}}</a>
			<div class="star-count-container">
				<FontAwesomeIcon :icon="faStar" class="start-icon" />
				<div class="star-count">{{ props.repo.stars ? props.repo.stars : "" }}</div>
			</div>
		</div>
		<p class="description">
			{{ props.repo.description ? props.repo.description : "" }}
		</p>
		<div class="repo-footer">
			<div class="language-container">
				<div class="dot" :style="{ 'background-color': props.repo.languageColor }"></div>
				<div>{{ props.repo.language ? props.repo.language : "" }}</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.repo-box {
	width: 100%;
	height: 140px;

	box-sizing: border-box;
	border: var(--border);
	padding: 10px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 10px;

	h5,
	p {
		margin: 0px;
	}

	.header {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		width: 100%;

		font-family: "Merriweather", serif;
		font-optical-sizing: auto;
		font-style: normal;
		font-weight: 600;
		font-variation-settings: "wdth" 100;
		font-size: medium;

		a {
			text-decoration: none;
			color: steelblue;
		}

		.star-count-container {
			margin-left: auto;
			font-size: 1rem;
			padding-right: 2px;

			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			gap: 4px;

			.start-icon {
				color: #ffd355;
			}
			.start-icon :hover {
				text-shadow: var(--box-shadow);
				box-shadow: var(--box-shadow);
			}
		}
	}

	.repo-box:hover {
		box-shadow: var(--box-shadow);
	}

	.description {
		box-sizing: border-box;
		width: 100%;
		height: 100%;

		overflow-y: scroll;
		overflow-x: hidden;
	}

	.repo-footer {
		width: 100%;
		margin-top: auto;
		box-sizing: border-box;
		.language-container {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			flex-direction: row;
			gap: 6px;

			.dot {
				width: 10px;
				height: 10px;
				box-sizing: border-box;
			}
		}
	}
}
</style>
