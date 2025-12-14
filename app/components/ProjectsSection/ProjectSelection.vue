<script setup>
import RepoBox from "./RepoBox/RepoBox.vue";

async function getPinedRepos() {
	let res = await $fetch(`https://pinned.berrysauce.dev/get/udan-jayanith`);
	return res;
}

let pinedRepos = useState("pinedRepos", () => null);
getPinedRepos().then((json)=>{
	pinedRepos.value = json
})
</script>

<template>
	<div class="project-selection-body" v-if="pinedRepos != null">
		<RepoBox v-for="repo in pinedRepos" :repo="repo"></RepoBox>
	</div>
</template>

<style scoped>
.project-selection-body {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 10px;
}

@media (orientation: portrait) {
	.project-selection-body {
		grid-template-columns: repeat(1, 1fr);
	}
}
</style>
