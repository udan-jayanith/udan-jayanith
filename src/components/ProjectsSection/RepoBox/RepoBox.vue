<script setup>
let props = defineProps({
	repo: Object,
});
</script>

<template>
	<div class="repo-box">
		<h5>
			<a :href="`https://github.com/udan-jayanith/${props.repo.name}`">{{ props.repo.name ? props.repo.name : "" }}</a>
		</h5>
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

	&:hover {
		box-shadow: var(--box-shadow);
	}

	h5,
	p {
		margin: 0px;
	}

	h5 {
		a {
			text-decoration: none;
			color: steelblue;
		}
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
